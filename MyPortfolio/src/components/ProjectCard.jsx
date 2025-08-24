export default function ProjectCard({ title, description, image, demoLink, codeLink }) {
  return (
    <div className="bg-[#1e1e1e] shadow-lg rounded-lg overflow-hidden border border-gray-700">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <div className="mt-4 flex gap-2">
          <a href={demoLink} target="_blank" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Demo</a>
          <a href={codeLink} target="_blank" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Code</a>
        </div>
      </div>
    </div>
  );
}
