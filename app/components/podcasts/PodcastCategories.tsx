'use client';

export default function PodcastCategories() {
    const categories = [
        { id: 1, name: 'Technology & AI', color: 'border-blue-500/30 text-blue-300 bg-blue-500/10' },
        { id: 2, name: 'Business', color: 'border-green-500/30 text-green-300 bg-green-500/10' },
        { id: 3, name: 'Storytelling', color: 'border-yellow-500/30 text-yellow-300 bg-yellow-500/10' },
        { id: 4, name: 'Comedy', color: 'border-pink-500/30 text-pink-300 bg-pink-500/10' },
        { id: 5, name: 'Self-Growth', color: 'border-violet-500/30 text-violet-300 bg-violet-500/10' },
        { id: 6, name: 'True Crime', color: 'border-red-500/30 text-red-300 bg-red-500/10' },
        { id: 7, name: 'Science', color: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10' },
    ];

    return (
        <div className="mb-12 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`px-6 py-3 rounded-full border ${cat.color} hover:bg-white/10 transition-all font-medium text-sm whitespace-nowrap`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
