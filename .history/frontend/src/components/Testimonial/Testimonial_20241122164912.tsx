export default function Testimonial() {
    const testimonials = [
      {
        name: "Bonnie Green",
        title: "Developer at Open AI",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
        quote: `"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application..."`,
      },
      {
        name: "Roberta Casas",
        title: "Lead designer at Dropbox",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
        quote: `"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework..."`,
      },
      {
        name: "Jese Leos",
        title: "Software Engineer at Facebook",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
        quote: `"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite..."`,
      },
      {
        name: "Joseph McFall",
        title: "CTO at Google",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        quote: `"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind..."`,
      },
    ];
  
    return (
      <section className="bg-white py-8 px-4 m-auto max-w-screen-xl text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-primary dark:text-black">Testimonials</h2>
        <p className="mb-8 text-gray-500 dark:text-gray-400">Explore the whole collection of open-source web components...</p>
        <div className="grid mb-8 lg:grid-cols-2">
          {testimonials.map(({ name, title, image, quote }, index) => (
            <figure key={index} className="flex flex-col justify-center items-center p-8 text-center border-b border-gray-200 md:p-12 bg-primary dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{quote.split(" ")[0]}</h3>
                <p className="my-4 text-justify leading-relaxed">{quote}</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src={image} alt={`${name} profile`} />
                <div className="text-left text-sm font-light dark:text-white">
                  <div>{name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }
  