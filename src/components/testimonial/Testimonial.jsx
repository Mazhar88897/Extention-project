import { useSelector } from "react-redux";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "/public/assets/1.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "With their innovative tool, I was able to streamline my scholarship application process, saving valuable time and effort. The personalized suggestions and tips provided by the AI greatly enhanced my application, ultimately leading to me securing a $5,000 scholarship. Highly recommend it!",
    },
    {
      avatar: "/public/assets/2.jpg",
      name: "Naomi Wang",
      title: "Product designer",
      quote:
        "As a busy student juggling academics and extracurricular activities, I struggled to craft compelling scholarship applications. But thanks to this tool, I received tailored guidance at every step, from essay writing to highlighting my achievements. Thanks to its assistance, I not only improved my application but also landed a $7,500 scholarship that will significantly ease my financial burden. Thank you for this incredible resource!",
    },
    {
        avatar: "/public/assets/3.jpg",
        name: "Ji-ho Jang",
        title: "DevOp engineer",
        quote: "I am beyond thrilled with the results achieved through this extension. It provided me with invaluable insights and feedback that elevated my scholarship application to new heights. The AI's ability to analyze my profile and suggest personalized improvements was impressive. Thanks to its assistance, I secured a $10,000 scholarship that will support my academic journey. I'm immensely grateful for this innovative tool!"
    },
  ];
  const { mode } = useSelector((state) => state.mode);

  return (
    <section className="py-14 text-white tracking-[1px] ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className={` text-3xl font-semibold sm:text-4xl ${mode}`}>
            See what others saying about us
          </h3>
          <p className="mt-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est
            hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
            lorem, euismod volutpat arcu volutpat et.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="border  p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img src={item.avatar} className="w-16 h-16 object-cover  rounded-full" />
                    <div>
                      <span className="block  font-semibold">{item.name}</span>
                      {/* <span className="block  text-sm mt-0.5">
                        {item.title}
                      </span> */}
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 ">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
