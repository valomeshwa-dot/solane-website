'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Plus, X, Zap, MapPin, Calendar, Trash2, Edit3, Filter,
    Search, Layers, Save, Camera, AlertTriangle, ArrowRight, Clock,
    ShieldCheck, ArrowUpRight, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Project {
    id: string;
    created_at: string;
    site_name: string;
    location: string;
    capacity_kw: string;
    surface_category: string;
    completion_year: string;
    image_url: string;
}

export default function AdminProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<string | null>(null);

    const [filterType, setFilterType] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCapacity, setFilterCapacity] = useState('all');
    const [filterYear, setFilterYear] = useState('all');

    const [formData, setFormData] = useState({
        site_name: '',
        location: '',
        capacity_kw: '',
        surface_category: 'Residential',
        completion_year: '',
        image_url: '',
    });

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const resetForm = () => {
        setFormData({
            site_name: '',
            location: '',
            capacity_kw: '',
            surface_category: 'Residential',
            completion_year: '',
            image_url: '',
        });
        setImageFile(null);
        setImagePreview(null);
        setEditingId(null);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    async function fetchProjects() {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            setProjects(data || []);
        } catch (err) {
            console.error('Error fetching projects:', err);
        } finally {
            setLoading(false);
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("File size must be less than 5MB");
                return;
            }
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImageFile(null);
        setImagePreview(null);
        setFormData({ ...formData, image_url: '' });
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsUploading(true);
        try {
            let finalImageUrl = formData.image_url;

            // 1. Upload image if a new one is selected
            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop();
                const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
                const filePath = `${fileName}`;

                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('project-assets')
                    .upload(filePath, imageFile);

                if (uploadError) {
                    // Try to create the bucket if it doesn't exist (though usually done via UI)
                    if (uploadError.message.includes('bucket not found')) {
                        console.log("Bucket 'project-assets' not found, please create it in Supabase dashboard");
                        throw new Error("Storage bucket 'project-assets' not found. Please create it in your Supabase dashboard.");
                    }
                    throw uploadError;
                }

                const { data: { publicUrl } } = supabase.storage
                    .from('project-assets')
                    .getPublicUrl(filePath);

                finalImageUrl = publicUrl;
            }

            // Ensure no extra fields are sent and names match schema
            const payload = {
                site_name: formData.site_name,
                location: formData.location,
                capacity_kw: formData.capacity_kw,
                surface_category: formData.surface_category,
                completion_year: formData.completion_year,
                image_url: finalImageUrl,
            };

            if (editingId) {
                const { error } = await supabase.from('projects').update(payload).eq('id', editingId);
                if (error) throw error;
            } else {
                const { error } = await supabase.from('projects').insert([payload]);
                if (error) throw error;
            }
            closeModal();
            fetchProjects();
        } catch (err: any) {
            console.error('Error saving project:', err);
            alert(err.message || 'Error processing request');
        } finally {
            setIsUploading(false);
        }
    }

    async function handleDelete() {
        if (!itemToDelete) return;
        try {
            const { error } = await supabase.from('projects').delete().eq('id', itemToDelete);
            if (error) throw error;
            setIsDeleteConfirmOpen(false);
            setItemToDelete(null);
            fetchProjects();
        } catch (err) {
            console.error('Error deleting project:', err);
        }
    }

    const openEditModal = (project: Project) => {
        setEditingId(project.id);
        setFormData({
            site_name: project.site_name,
            location: project.location,
            capacity_kw: project.capacity_kw,
            surface_category: project.surface_category,
            completion_year: project.completion_year,
            image_url: project.image_url,
        });
        setImagePreview(project.image_url);
        setIsModalOpen(true);
    };



    const filteredProjects = projects.filter(p => {
        const matchesSearch = p.site_name.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || p.surface_category === filterType;
        return matchesSearch && matchesType;
    });

    const projectTypes = ['Residential', 'Commercial', 'Industrial', 'Institutional'];

    return (
        <div className="space-y-12 pb-24 relative">
            <header className="flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white uppercase italic">
                        Structural <span className="text-amber-500 font-black not-italic">portfolios</span>
                    </h1>
                    <p className="text-neutral-500 font-medium text-sm tracking-widest uppercase mb-1">
                        Managing {projects.length} architectural engineering assets.
                    </p>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group flex items-center gap-4 bg-amber-500 hover:bg-amber-600 text-black font-black h-[64px] px-12 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all shadow-[0_20px_40px_rgba(245,166,35,0.2)] hover:-translate-y-1"
                >
                    <Plus size={16} strokeWidth={3} className="transition-transform group-hover:rotate-90" />
                    Add Engineering Project
                </button>
            </header>

            {/* LUXURY SEARCH & FILTERS */}
            <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end">
                <div className="relative group max-w-3xl">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600 transition-colors group-focus-within:text-amber-500" />
                    <input
                        type="text"
                        placeholder="Search by asset title, geographic coordinates, or site name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#111] border border-white/5 rounded-2xl h-16 pl-16 pr-6 text-sm font-bold text-white transition-all focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/5 outline-none placeholder:text-neutral-700 shadow-2xl"
                    />
                </div>

                <div className="flex flex-wrap gap-4">
                    <FilterGroup label="Project Type" options={['all', ...projectTypes]} value={filterType} onChange={setFilterType} />
                    <FilterGroup label="Capacity Range" options={['all', 'Small (< 10kW)', 'Medium (10-100kW)', 'Large (> 100kW)']} value={filterCapacity} onChange={setFilterCapacity} />
                    <FilterGroup label="Completion Era" options={['all', '2024', '2023', '2022']} value={filterYear} onChange={setFilterYear} />
                </div>
            </div>

            {/* THREE-COLUMN PREMIUM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <AnimatePresence mode="popLayout">
                    {loading ? (
                        <div className="col-span-full py-40 flex flex-col items-center justify-center gap-4">
                            <div className="w-10 h-10 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700 animate-pulse">Syncing PORTFOLIOS...</span>
                        </div>
                    ) : filteredProjects.length === 0 ? (
                        <div className="col-span-full py-40 bg-[#0a0a0a] border border-white/5 border-dashed rounded-[50px] flex flex-col items-center justify-center p-20 gap-8">
                            <div className="p-8 bg-neutral-900/50 border border-white/5 rounded-full text-neutral-800 transition-transform hover:scale-110">
                                <Layers size={48} strokeWidth={1} />
                            </div>
                            <div className="space-y-2 text-center">
                                <h3 className="text-xl font-black text-neutral-500 uppercase tracking-widest text-white">No Assets Logged</h3>
                                <p className="text-[10px] font-bold text-neutral-700 uppercase tracking-[0.4em]">Mainframe registry currently empty.</p>
                            </div>
                        </div>
                    ) : (
                        filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                                className="group relative bg-[#111] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl transition-all hover:border-amber-500/40 hover:shadow-[0_0_50px_rgba(245,166,35,0.05)] hover:-translate-y-2 h-[520px] flex flex-col"
                            >
                                {/* Visual Asset Container */}
                                <div className="relative h-64 overflow-hidden bg-neutral-950 border-b border-white/5">
                                    {project.image_url ? (
                                        <img
                                            src={project.image_url}
                                            alt={project.site_name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[100%] group-hover:grayscale-0 brightness-[40%] group-hover:brightness-100"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-neutral-900 bg-neutral-950">
                                            <Camera size={48} strokeWidth={1} />
                                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Record Empty</span>
                                        </div>
                                    )}

                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <span className="px-5 py-2 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-amber-500 shadow-2xl">
                                            {project.surface_category}
                                        </span>
                                    </div>

                                    <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        <button onClick={() => openEditModal(project)} className="p-3 bg-white text-black rounded-full hover:bg-amber-500 transition-all shadow-xl">
                                            <Edit3 size={14} strokeWidth={3} />
                                        </button>
                                        <button onClick={() => { setItemToDelete(project.id); setIsDeleteConfirmOpen(true); }} className="p-3 bg-red-500 text-black rounded-full hover:bg-red-600 transition-all shadow-xl">
                                            <Trash2 size={14} strokeWidth={3} />
                                        </button>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2">
                                        <ShieldCheck size={14} className="text-amber-500/60" />
                                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-500 group-hover:text-white/60 truncate transition-colors">Engineering Record Locked</span>
                                    </div>

                                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
                                </div>

                                <div className="p-10 flex flex-col flex-1 justify-between gap-8">
                                    <div className="space-y-6">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700">Project Title</p>
                                            <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors uppercase italic truncate tracking-tighter">{project.site_name}</h3>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                                            <ProjectInfo icon={<MapPin size={12} />} label="Location" value={project.location} />
                                            <ProjectInfo icon={<Zap size={12} />} label="Surface Yield" value={`${project.capacity_kw} kW`} highlight />
                                            <ProjectInfo icon={<Calendar size={12} />} label="Deployment" value={project.completion_year} />
                                            <ProjectInfo icon={<CheckCircle2 size={12} />} label="Status" value="Live" />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/5">
                                        <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600 hover:text-white transition-all group/btn">
                                            Detailed Intel
                                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>

            {/* LUXURY PROJECT MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0"
                        />

                        <motion.div
                            layoutId="project-modal"
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 10 }}
                            className="relative w-full max-w-[760px] bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col max-h-[75vh]"
                        >
                            {/* FIXED HEADER */}
                            <div className="px-5 pt-5 pb-4 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]">
                                <div className="space-y-0.5">
                                    <h2 className="text-lg font-bold text-white uppercase italic tracking-tighter">
                                        {editingId ? 'Edit Engineering' : 'Archive New'} <span className="text-amber-500 font-bold not-italic">Asset</span>
                                    </h2>
                                    <p className="text-[8px] text-neutral-600 font-bold uppercase tracking-[0.2em]">Structural Protocol L4</p>
                                </div>
                                <button onClick={closeModal} className="p-1.5 hover:bg-white/5 rounded-full text-neutral-500 hover:text-white transition-all">
                                    <X size={18} />
                                </button>
                            </div>

                            {/* SCROLLABLE FORM */}
                            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 custom-scrollbar space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                    <FormInput label="Structural Site Name" value={formData.site_name} onChange={(val) => setFormData({ ...formData, site_name: val })} />
                                    <FormInput label="Deployment Matrix (Location)" value={formData.location} onChange={(val) => setFormData({ ...formData, location: val })} />
                                    <FormInput label="Thermal Yield (kW)" value={formData.capacity_kw} onChange={(val) => setFormData({ ...formData, capacity_kw: val })} />
                                    <div className="space-y-1.5 text-left">
                                        <label className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">Surface Category</label>
                                        <div className="relative">
                                            <select
                                                value={formData.surface_category}
                                                onChange={(e) => setFormData({ ...formData, surface_category: e.target.value })}
                                                className="w-full bg-[#111] border border-white/10 rounded-lg h-9 px-4 text-[11px] font-bold text-white transition-all focus:border-amber-500/50 outline-none appearance-none cursor-pointer"
                                            >
                                                {projectTypes.map(t => <option key={t} value={t} className="bg-black text-white">{t.toUpperCase()}</option>)}
                                            </select>
                                            <Layers className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={12} />
                                        </div>
                                    </div>
                                    <FormInput label="Completion Era (Year)" value={formData.completion_year} onChange={(val: string) => setFormData({ ...formData, completion_year: val })} />

                                    <div className="col-span-full">
                                        <ImageUpload
                                            label="Visual Asset (PNG, JPG, WEBP)"
                                            preview={imagePreview}
                                            onChange={handleFileChange}
                                            onRemove={removeImage}
                                        />
                                    </div>
                                </div>

                                <div className="pt-2 flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isUploading}
                                        className="w-auto px-10 bg-amber-500 hover:bg-amber-600 disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-black h-10 rounded-full text-[9px] tracking-[0.2em] uppercase transition-all shadow-lg flex items-center justify-center gap-2"
                                    >
                                        {isUploading ? (
                                            <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                        ) : (
                                            <Save size={14} />
                                        )}
                                        {isUploading ? 'Uploading...' : 'Sync with Registry'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isDeleteConfirmOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-[60px] p-16 max-w-md w-full text-center space-y-10 shadow-2xl"
                        >
                            <div className="w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto text-red-500">
                                <AlertTriangle size={40} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Register Purge?</h3>
                                <p className="text-neutral-600 text-[10px] font-bold leading-loose uppercase tracking-[0.3em]">Are you certain? This action will permanently erase the structural engineering record from the mainframe.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <button onClick={handleDelete} className="w-full h-16 bg-red-500 hover:bg-red-600 text-black rounded-full text-[10px] font-black uppercase tracking-widest transition-all">Confirm Erase</button>
                                <button onClick={() => setIsDeleteConfirmOpen(false)} className="w-full h-16 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-700 hover:text-white transition-all">Abort Sync</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ImageUpload({ label, preview, onChange, onRemove }: { label: string, preview: string | null, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, onRemove: () => void }) {
    return (
        <div className="space-y-1.5 text-left group">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600 group-focus-within:text-amber-500 transition-colors">{label}</label>
            <div className="relative h-[120px] rounded-lg border border-dashed border-white/10 bg-[#111] hover:border-amber-500/50 transition-all overflow-hidden">
                {preview ? (
                    <div className="relative w-full h-full p-2">
                        <img src={preview} alt="Upload preview" className="w-full h-full object-cover rounded-md" />
                        <button
                            type="button"
                            onClick={onRemove}
                            className="absolute top-3 right-3 p-1.5 bg-black/80 text-white rounded-full hover:bg-red-500 transition-colors shadow-xl"
                        >
                            <X size={12} />
                        </button>
                    </div>
                ) : (
                    <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer group/upload">
                        <Camera size={24} className="text-neutral-700 group-hover/upload:text-amber-500 transition-colors mb-2" />
                        <p className="text-[9px] font-bold text-neutral-700 uppercase tracking-widest group-hover/upload:text-neutral-400 transition-colors">
                            Drag & drop or <span className="text-amber-500/60">click to upload</span>
                        </p>
                        <input type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={onChange} />
                    </label>
                )}
            </div>
        </div>
    );
}

function ProjectInfo({ icon, label, value, highlight = false }: any) {
    return (
        <div className="space-y-2 group/item">
            <div className="flex items-center gap-2 text-neutral-700 transition-colors group-hover/item:text-amber-500/60">
                <div className="p-1.5 bg-neutral-900/50 rounded-lg border border-white/5">{icon}</div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em]">{label}</p>
            </div>
            <p className={cn(
                "text-[12px] font-bold uppercase tracking-tight truncate",
                highlight ? "text-amber-500" : "text-white/80"
            )}>{value || 'N/A'}</p>
        </div>
    );
}

function FormInput({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) {
    return (
        <div className="space-y-1.5 group text-left">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600 group-focus-within:text-amber-500 transition-colors">{label}</label>
            <input
                required
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-lg h-9 px-4 text-[11px] font-bold text-white transition-all focus:border-amber-500/50 outline-none placeholder:text-neutral-800"
            />
        </div>
    );
}

function FilterGroup({ label, options, value, onChange }: any) {
    return (
        <div className="space-y-3">
            <p className="text-[9px] font-black uppercase tracking-widest text-neutral-700 ml-4">{label}</p>
            <div className="flex bg-[#111] p-1 rounded-full border border-white/5 shadow-inner">
                {options.map((opt: string) => (
                    <button
                        key={opt}
                        onClick={() => onChange(opt)}
                        className={cn(
                            "px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all",
                            value === opt ? "bg-amber-500 text-black shadow-lg" : "text-neutral-500 hover:text-white"
                        )}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    )
}
