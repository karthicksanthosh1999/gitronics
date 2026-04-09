import Accordion from "@/components/ui/accordion";

// --- Data for the Accordion ---
const faqData = [
  {
    title: "What are the key features of React?",
    content:
      "React's key features include its component-based architecture, virtual DOM for performance, JSX for templating, and one-way data flow. It can also be rendered on the server side, making it flexible for various use cases.",
  },
  {
    title: "How does Tailwind CSS improve development speed?",
    content:
      "Tailwind CSS accelerates development by providing a vast library of utility classes that can be applied directly in your HTML. This eliminates the need to write custom CSS for most styling, allowing for rapid prototyping and consistent design.",
  },
  {
    title: "What are best practices for accessibility (a11y)?",
    content:
      "Best practices for accessibility include using semantic HTML (e.g., <button>, <nav>), providing text alternatives for images (alt text), ensuring sufficient color contrast, enabling keyboard navigation, and using ARIA roles and attributes where necessary.",
  },
  {
    title: "How do you manage state in a complex React application?",
    content:
      "For complex applications, state can be managed using built-in hooks like `useReducer` and `useContext` for medium-sized apps, or dedicated state management libraries like Redux, Zustand, or MobX for larger, more intricate state requirements.",
  },
];

// --- The Page Component ---
export default function AccordionProducts() {
  return (
    <div className="flex flex-col items-center justify-center font-sans p-4 transition-colors duration-500">
      <div className="w-full mx-auto container">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-100 text-center mb-2">
          Product Details & Technical Specifications
        </h1>
        <p className="text-gray-600 dark:text-slate-400 text-center mb-10">
          HI SIL Glass Works has a wide range of glass products manufactured to
          high standards and stringent quality parameters. We manufacture
          conical and spherical ground joints, stop-cocks, screw-cocks, threaded
          tapered joints, single and multi-neck flasks, distillation and
          reaction components, condensers, separating and dropping funnels,
          extractors, reaction vessels and water distillers. We also specialize
          in filtration products including gooch crucibles, buchner funnels,
          pipeline filters, micro filtration kits, lab jacks, clamps and boss
          heads. Our product range consists of diverse items, offering
          comprehensive glassware and related product solutions for broad
          laboratory and industrial requirements. HI SIL Glass has earned a
          strong reputation for custom-made glassware for laboratory and
          industrial applications.
        </p>

        {/* Here we use the reusable component with our data */}
        <Accordion items={faqData} />
      </div>
    </div>
  );
}
