import { IconLoader } from "./IconLoader";

export function BandcampIcon() {
  return (
    <div className="mt-[4px]">
      <IconLoader
        src={"/images/icons/bandcamp-logotype-light-128.png"}
        alt="Listen on Bandcamp"
        height={32}
        width={110}
      />
    </div>
  );
}
