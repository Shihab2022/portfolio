import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectProps) {
  return (
    <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 flex flex-col">
      <div className="relative h-48 w-full bg-gray-900 p-4">
        {/* Project Image Mockup */}
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="opacity-80 hover:opacity-100 transition rounded-t-xl"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-gray-800 text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-textMuted text-sm mb-6 flex-grow">{description}</p>
        <a
          href={link}
          className="text-purple-400 font-medium hover:text-purple-300 text-sm flex items-center gap-1 mt-auto"
        >
          Live Demo ↗
        </a>
      </div>
    </div>
  );
}
