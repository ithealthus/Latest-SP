"use client";

export default function SecondOpinionSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Left Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          When to Seek a Second Opinion?
        </h2>
        <p className="text-black leading-relaxed">
          A second opinion gives you the confidence and clarity you need about your diagnosis and treatment plan. It can confirm whether your current approach is appropriate or suggest better alternatives for a safer and faster recovery.

        </p>
        <p className="text-black leading-relaxed mt-4">
         You should consider getting a second opinion if you’ve been advised a major surgery or complex treatment, diagnosed with a serious or rare condition, exploring advanced treatment options not available locally, or want reassurance before starting a long-term or high-risk treatment.

        </p>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="/images/second/1.webp"
          alt="Doctor consultation"
          className="rounded-lg shadow-md w-full max-w-md object-cover"
        />
      </div>
    </section>
  );
}
