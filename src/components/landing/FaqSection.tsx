import { faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Common Questions
        </h2>
          {faqItems.map((item) => (
              <div key={item.id} className="mb-6">
                <h3 className="text-left text-base font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="text-sm my-3 leading-relaxed text-slate-500">
                  {item.answer}
                </p>
              </div>
          ))}
        <button
          className="mt-8 font-semibold p-4 border-2 border-[#53B4DA] rounded-lg text-[#1E3E85] hover:bg-blue-50"
        >
          More Questions
        </button>
      </div>
    </section>
  );
}
