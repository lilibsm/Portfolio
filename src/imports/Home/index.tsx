import svgPaths from "./svg-4iu4qxmsjf";
import imgImage1 from "./3060f798acef1d98543f5a21d315eafac5ed53a2.png";
import imgImage4 from "./af5aae2b8260e3deacdbf9fbde48631de7af06d8.png";
import imgImage6 from "./f1f2dce188a1f2702f5f7215ffe26184f27356db.png";
import imgImage7 from "./b063f0e086ceed44504d530d9bd12a753e99a47f.png";
import imgImage5 from "./ec7724c9479dfc16cc2b404db1f1dcabb72f3a63.png";
import imgImage11 from "./4df7fafd06b5f218d5141bc2069cd6be6d69f34f.png";
import imgImage51 from "./f028c5c11690422195b96d6578bfe7d05a8eaa88.png";
import imgImage52 from "./ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFrame1430105576 from "./24bc139fdd6f31470b3040d57e66589f245e69e4.png";
import imgFrame4 from "./7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import { imgExpandContent } from "./svg-isrv7";

function Mail() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="mail">
          <mask height="48" id="mask0_1_998" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="48" id="Bounding box" width="48" />
          </mask>
          <g mask="url(#mask0_1_998)">
            <path d={svgPaths.pe3b49f0} fill="var(--fill-0, #1C1B1F)" id="mail_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Call() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="call">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="call">
          <mask height="48" id="mask0_1_1004" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="48" id="Bounding box" width="48" />
          </mask>
          <g mask="url(#mask0_1_1004)">
            <path d={svgPaths.p21680f80} fill="var(--fill-0, #1C1B1F)" id="call_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <div className="pointer-events-none relative rounded-[6px] shrink-0 size-[48px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6px] size-full" src={imgImage1} />
        <div aria-hidden className="absolute border-2 border-black border-solid inset-0 rounded-[6px]" />
      </div>
      <Mail />
      <Call />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#b9ccd1] relative shrink-0 w-full" data-name="header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#aeaeb2] text-[14px] text-center w-full">Lili Smyth | Product designer</p>
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black w-full">{`I’m Lili Smyth, `}</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[18px] text-black w-full">Product designer, crafting meaningful digital experiences.</p>
      <Frame29 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">a product designer passionate about creating intuitive, engaging and accessible digital products solving real user problems through design.</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <div className="bg-[#676666] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Large button">
        <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">View my work</p>
      </div>
      <div className="bg-white content-stretch flex h-[48px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0 w-[200px]" data-name="Large button">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Get in touch</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="flex h-[64px] items-center justify-center relative shrink-0 w-[48px]">
        <div className="flex-none rotate-90">
          <div className="h-[48px] relative w-[64px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 48">
              <path d={svgPaths.p1a5ca680} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[152px] py-[128px] relative size-full">
        <Frame30 />
        <Frame43 />
        <Frame42 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black w-full">{`I’m Lili Smyth, `}</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[18px] text-black w-full">About me</p>
      <Frame32 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">a product designer passionate about creating intuitive, engaging and accessible digital products solving real user problems through design.</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0">
      <div className="h-[60px] relative shrink-0 w-[130px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0">
      <div className="h-[60px] relative shrink-0 w-[173px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0">
      <div className="h-[60px] relative shrink-0 w-[343px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[60px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0">
      <div className="h-[60px] relative shrink-0 w-[87px]" data-name="image 11">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.63%] left-0 max-w-none top-[-26.27%] w-full" src={imgImage11} />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
      <Frame40 />
      <Frame50 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black w-full">Working with companies such as</p>
      <Frame66 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px relative self-stretch">
      <Frame31 />
      <Frame65 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame68 />
      <div className="h-[567px] pointer-events-none relative rounded-[24px] shrink-0 w-[425px]" data-name="Image (5) 1">
        <div aria-hidden className="absolute inset-0 rounded-[24px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage51} />
          <img alt="" className="absolute max-w-none object-cover opacity-50 rounded-[24px] size-full" src={imgImage52} />
        </div>
        <div aria-hidden className="absolute border-20 border-solid border-white inset-0 rounded-[24px]" />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[152px] py-[64px] relative size-full">
        <Frame47 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[26px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <div aria-hidden className="absolute border-[#f2f2f7] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.99%] left-[-10.07%] max-w-none top-[0.01%] w-[120.14%]" src={imgFrame1430105576} />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[13px] min-w-px relative text-[12px] text-black">{`Farming disaster relief support tools `}</p>
      <div className="relative shrink-0 size-[20px]" data-name="expand_content">
        <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.167px_-4.167px] mask-size-[20px_20px]" style={{ maskImage: `url("${imgExpandContent}")` }} data-name="expand_content">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p12b01200} fill="var(--fill-0, #1C1B1F)" id="expand_content" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame55 />
      <p className="[word-break:break-word] font-['Jost:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black w-full">Custom tool library and dashboard</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">Government</p>
      </div>
      <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">Agriculture</p>
      </div>
      <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">Detailed design</p>
      </div>
      <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">User testing</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative">
      <Frame51 />
      <Frame121 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <Frame49 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div className="content-stretch flex items-start px-[12px] py-[24px] relative size-full">
        <Frame27 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full">
      <Frame />
      <Frame120 />
      <Frame2 />
    </div>
  );
}

function Image() {
  return (
    <div className="bg-[#f4f4f4] content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col h-[514px] items-start relative rounded-[12px] shrink-0 w-[543px]" data-name="Image">
      <Frame12 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[26px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <div aria-hidden className="absolute border-[#f2f2f7] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame4} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[13px] min-w-px relative text-[12px] text-black">My portfolio</p>
      <div className="relative shrink-0 size-[20px]" data-name="expand_content">
        <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.167px_-4.167px] mask-size-[20px_20px]" style={{ maskImage: `url("${imgExpandContent}")` }} data-name="expand_content">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p12b01200} fill="var(--fill-0, #1C1B1F)" id="expand_content" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame58 />
      <p className="[word-break:break-word] font-['Jost:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black w-full">The end-to-end process of showcasing my work.</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative">
      <Frame57 />
      <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">User research</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <Frame56 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div className="content-stretch flex items-start px-[12px] py-[24px] relative size-full">
        <Frame28 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full">
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#f4f4f4] content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col h-[513px] items-start relative rounded-[12px] shrink-0 w-[543px]" data-name="Image">
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white h-[26px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <div aria-hidden className="absolute border-[#f2f2f7] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame4} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[13px] min-w-px relative text-[12px] text-black">My portfolio</p>
      <div className="relative shrink-0 size-[20px]" data-name="expand_content">
        <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.167px_-4.167px] mask-size-[20px_20px]" style={{ maskImage: `url("${imgExpandContent}")` }} data-name="expand_content">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p12b01200} fill="var(--fill-0, #1C1B1F)" id="expand_content" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame61 />
      <p className="[word-break:break-word] font-['Jost:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black w-full">The end-to-end process of showcasing my work.</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative">
      <Frame60 />
      <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">User research</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <Frame59 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div className="content-stretch flex items-start px-[12px] py-[24px] relative size-full">
        <Frame33 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full">
      <Frame5 />
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#f4f4f4] content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col h-[525px] items-start relative rounded-[12px] shrink-0 w-[543px]" data-name="Image">
      <Frame14 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white h-[26px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <div aria-hidden className="absolute border-[#f2f2f7] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame4} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[13px] min-w-px relative text-[12px] text-black">My portfolio</p>
      <div className="relative shrink-0 size-[20px]" data-name="expand_content">
        <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.167px_-4.167px] mask-size-[20px_20px]" style={{ maskImage: `url("${imgExpandContent}")` }} data-name="expand_content">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p12b01200} fill="var(--fill-0, #1C1B1F)" id="expand_content" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame67 />
      <p className="[word-break:break-word] font-['Jost:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black w-full">The end-to-end process of showcasing my work.</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative">
      <Frame63 />
      <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">User research</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <Frame62 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div className="content-stretch flex items-start px-[12px] py-[24px] relative size-full">
        <Frame34 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[#f4f4f4] content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col h-[525px] items-start relative rounded-[12px] shrink-0 w-[543px]" data-name="Image">
      <Frame15 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-start flex flex-wrap gap-[48px] items-start relative shrink-0 w-full">
      <Image />
      <Image1 />
      <Image2 />
      <Image3 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[152px] py-[96px] relative size-full">
          <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">Work</p>
          <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black w-full">xx</p>
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Information architecture</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="bg-[#d9d9d9] relative shrink-0 size-[41px]" />
      <Frame35 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Description</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Dev handover</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="bg-[#d9d9d9] relative shrink-0 size-[41px]" />
      <Frame38 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Description</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">User testing</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <Frame71 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame70 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="bg-[#d9d9d9] relative shrink-0 size-[41px]" />
      <Frame69 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Description</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">BA liaison</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <Frame75 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame74 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="bg-[#d9d9d9] relative shrink-0 size-[41px]" />
      <Frame73 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Description</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Stakeholder engagement</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <Frame79 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame78 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="bg-[#d9d9d9] relative shrink-0 size-[41px]" />
      <Frame77 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Description</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Sprint planning</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <Frame83 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame82 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="bg-[#d9d9d9] relative shrink-0 size-[41px]" />
      <Frame81 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Description</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Platform design</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <Frame87 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame86 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="bg-[#d9d9d9] relative shrink-0 size-[41px]" />
      <Frame85 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Description</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <Frame44 />
      <Frame45 />
      <Frame48 />
      <Frame72 />
      <Frame76 />
      <Frame80 />
      <Frame84 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[152px] py-[128px] relative size-full">
          <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">{`Skills & expertise`}</p>
          <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black w-full">xx</p>
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] font-normal gap-[3px] items-start leading-[normal] min-w-px relative self-stretch text-black">
      <p className="relative shrink-0 text-[16px] w-full">[name]</p>
      <p className="relative shrink-0 text-[12px] w-full">[role]</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex h-[38px] items-start relative shrink-0 w-full">
      <Frame92 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame91 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[12px] py-[24px] relative shrink-0 w-[362px]">
      <Frame90 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">[quote]</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] font-normal gap-[3px] items-start leading-[normal] min-w-px relative self-stretch text-black">
      <p className="relative shrink-0 text-[16px] w-full">[name]</p>
      <p className="relative shrink-0 text-[12px] w-full">[role]</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex h-[38px] items-start relative shrink-0 w-full">
      <Frame96 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame95 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[12px] py-[24px] relative shrink-0 w-[362px]">
      <Frame94 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">[quote]</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] font-normal gap-[3px] items-start leading-[normal] min-w-px relative self-stretch text-black">
      <p className="relative shrink-0 text-[16px] w-full">[name]</p>
      <p className="relative shrink-0 text-[12px] w-full">[role]</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex h-[38px] items-start relative shrink-0 w-full">
      <Frame100 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame99 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[12px] py-[24px] relative shrink-0 w-[362px]">
      <Frame98 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">[quote]</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] font-normal gap-[3px] items-start leading-[normal] min-w-px relative self-stretch text-black">
      <p className="relative shrink-0 text-[16px] w-full">[name]</p>
      <p className="relative shrink-0 text-[12px] w-full">[role]</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex h-[38px] items-start relative shrink-0 w-full">
      <Frame104 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame103 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[12px] py-[24px] relative shrink-0 w-[362px]">
      <Frame102 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">[quote]</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] font-normal gap-[3px] items-start leading-[normal] min-w-px relative self-stretch text-black">
      <p className="relative shrink-0 text-[16px] w-full">[name]</p>
      <p className="relative shrink-0 text-[12px] w-full">[role]</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex h-[38px] items-start relative shrink-0 w-full">
      <Frame108 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame107 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[12px] py-[24px] relative shrink-0 w-[362px]">
      <Frame106 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">[quote]</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] font-normal gap-[3px] items-start leading-[normal] min-w-px relative self-stretch text-black">
      <p className="relative shrink-0 text-[16px] w-full">[name]</p>
      <p className="relative shrink-0 text-[12px] w-full">[role]</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex h-[38px] items-start relative shrink-0 w-full">
      <Frame112 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame111 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[12px] py-[24px] relative shrink-0 w-[362px]">
      <Frame110 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">[quote]</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <Frame89 />
      <Frame93 />
      <Frame97 />
      <Frame101 />
      <Frame105 />
      <Frame109 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[152px] py-[128px] relative size-full">
          <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">Testimonials</p>
          <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black w-full">xx</p>
          <Frame88 />
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black text-center w-full">Work with me</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <Frame115 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black text-center w-full">Open to xyz</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="pointer-events-none relative rounded-[6px] shrink-0 size-[48px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6px] size-full" src={imgImage1} />
        <div aria-hidden className="absolute border-2 border-black border-solid inset-0 rounded-[6px]" />
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">linkedin.com/lilismyth</p>
    </div>
  );
}

function Mail1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="mail">
          <mask height="48" id="mask0_1_998" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="48" id="Bounding box" width="48" />
          </mask>
          <g mask="url(#mask0_1_998)">
            <path d={svgPaths.pe3b49f0} fill="var(--fill-0, #1C1B1F)" id="mail_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Mail1 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">lili.paris@icloud.com</p>
    </div>
  );
}

function Call1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="call">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="call">
          <mask height="48" id="mask0_1_1004" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="48" id="Bounding box" width="48" />
          </mask>
          <g mask="url(#mask0_1_1004)">
            <path d={svgPaths.p21680f80} fill="var(--fill-0, #1C1B1F)" id="call_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Call1 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">+64 28 8532 7884</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame116 />
      <Frame117 />
      <Frame118 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame114 />
      <Frame26 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#b9ccd1] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[152px] py-[96px] relative size-full">
          <Frame113 />
        </div>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] font-normal gap-[48px] items-start leading-[normal] relative shrink-0 text-[24px] text-black w-full whitespace-nowrap">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">CV</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">My work</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">xx</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame119 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[152px] py-[48px] relative size-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function FullScreenDesign() {
  return (
    <div className="bg-[#fdfff0] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Full screen design">
      <Header />
      <Frame17 />
      <Frame23 />
      <Frame22 />
      <Frame21 />
      <Frame24 />
      <Frame25 />
      <Frame19 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home">
      <FullScreenDesign />
    </div>
  );
}