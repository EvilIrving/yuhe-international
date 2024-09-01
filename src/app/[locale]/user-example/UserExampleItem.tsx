import Image from "next/image";

const UserExampleItem = ({
  item,
}: {
  item: { src: string; title: string; desc: string };
}) => {
  const { src, title, desc } = item;
  return (
    <div className="group relative size-full">
      <Image src={src} fill alt={title} className="rounded-md object-fill" />
      {/* TODO 这里如何处理hover效果 */}
      <div className="absolute left-0 top-0 h-full w-1/3 rounded bg-white/75 opacity-0 shadow transition-opacity duration-500 group-hover:opacity-100 dark:bg-gray-700">
        <div className="p-4">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default UserExampleItem;
