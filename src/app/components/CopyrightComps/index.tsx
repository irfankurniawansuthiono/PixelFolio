export default function CopyrightComps() {
    return (
        <div className="fixed bottom-6 flex justify-center items-center gap-2">
            <div className="flex md:hidden">
                <i className="nes-icon coin is-small"></i>
            </div>
            <div className="hidden md:flex">
                <i className="nes-icon coin is-medium"></i>
            </div>
            <span className="md:text-xl text-xs text-nowrap text-white">Copyright &copy;{new Date().getFullYear()} IrfanKS</span>
        </div>
    );
}