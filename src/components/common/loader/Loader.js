
export default function Loader({ fullScreen = true }) {
    return (
        <div
            className={
                fullScreen
                    ? "fixed inset-0 flex items-center justify-center bg-white/70 z-50"
                    : "flex items-center justify-center"
            }
        >
            <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}