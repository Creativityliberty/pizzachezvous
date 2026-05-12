export const GenericPage = ({ title }: { title: string }) => {
  return (
    <div className="pt-40 pb-32 px-5 md:px-8 max-w-7xl mx-auto text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6">{title}</h1>
      <p className="text-lg text-[#111111]/60 max-w-lg mx-auto">Cette page est en cours de construction.</p>
    </div>
  );
};
