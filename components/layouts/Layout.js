// components/layouts/Layout.js
import Link from "next/link";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-100 font-[Roboto]">
      <div className="flex w-9/12 items-center justify-center">
        <Link
          href="/"
          className="mt-2 flex w-1/2 flex-col items-center justify-center gap-y-3 rounded-md bg-primary py-3"
        >
          <div className="border-b-2 border-black text-3xl font-bold">
            K1SITE-CAR
          </div>
          <div className="text-lg">Choose and Buy Your Car</div>
        </Link>
      </div>
      <div className="w-9/12">{children}</div>
      <div className="mt-auto w-full bg-slate-400 py-3 text-center font-semibold text-slate-700">
        Developed By Ali Hosseini in k1site.com with ❤
      </div>
    </div>
  );
}
export default Layout;
