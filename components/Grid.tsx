import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="">
      <BentoGrid className="w-full text-white dark:text-white  transition-colors duration-300">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={`${item.className} text-gray-800 dark:text-white transition-colors duration-300`}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={`${item.titleClassName} text-white dark:text-gray-300 lg:hard-shadow sm:no-shadow`} // Shadow applied only on larger screens
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
