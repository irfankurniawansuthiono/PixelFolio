export default function CopyrightComps() {
    return (
        <div className="fixed bottom-6 md:bottom-3 flex justify-center items-center gap-2">
                <i className="nes-icon coin is-small"></i>
            <span className="md:text-xl text-xs text-nowrap text-white">Copyright &copy;{new Date().getFullYear()} IrfanKS</span>
        </div>
    );
}