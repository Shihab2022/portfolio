import { ArrowRight, Loader2 } from "lucide-react";

const CButton = ({
  isLoading = false,
  btnText,
}: {
  isLoading?: boolean;
  btnText: string;
}) => {
  return (
    <>
      <button
        type="submit"
        disabled={isLoading}
        className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-linear-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-900/20"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending System Query...</span>
          </>
        ) : (
          <>
            <span>{btnText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </>
  );
};

export default CButton;
