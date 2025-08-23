import Image from "next/image";

export default function InfoSection({
  title = "Infrastructure Highlights",
  subtitle = "Diagnostic Excellence",
  items = [],
  imageSrc,
  bgColor = "bg-white",
  textColor = "text-primary",
  reverse = false,
  iconSrc = "/images/group.svg",
}) {
  return (
    <section className={`${bgColor} py-12 px-4 md:px-12`}>
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <div className="space-y-6 md:w-1/2">
          {subtitle && <h3 className={`text-4xl font-semibold ${textColor}`}>{subtitle}</h3>}
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Image
                  src={iconSrc}
                  alt="check icon"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                <span className={`${textColor}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Section Image"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
}
