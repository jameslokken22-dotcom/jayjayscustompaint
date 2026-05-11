"use client";
  
<Projects/>                
export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projects</h1> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-white/20 rounded-xl p-4">
 
            <h2 className="text-xl font-semibold mt-4">Custom Helmet</h2>
            <p className="text-white/70 mt-2">A custom motorcycle helmet featuring a bold airbrushed design with vibrant colors and intricate patterns, providing both style and protection.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

