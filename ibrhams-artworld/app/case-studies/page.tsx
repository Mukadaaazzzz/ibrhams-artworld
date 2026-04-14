import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const studies = [
  {
    title: "Portrait Commission",
    problem: "Client wanted a lifelike portrait with strong emotion.",
    solution: "Used layered shading and reference blending.",
    result: "Delivered a highly realistic and expressive piece.",
  },
  {
    title: "Mural Project",
    problem: "Blank wall needed transformation.",
    solution: "Concept sketch + bold color execution.",
    result: "Created a visually striking public artwork.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-10">Case Studies</h1>

        <div className="space-y-10">
          {studies.map((s) => (
            <div key={s.title} className="border rounded-xl p-6">
              <h2 className="text-xl font-semibold">{s.title}</h2>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p><strong>Problem:</strong> {s.problem}</p>
                <p><strong>Solution:</strong> {s.solution}</p>
                <p><strong>Result:</strong> {s.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}