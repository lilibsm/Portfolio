import svgPaths from "./svg-2r7gvc365q";
import imgImage1 from "./3060f798acef1d98543f5a21d315eafac5ed53a2.png";
import imgImage4 from "./af5aae2b8260e3deacdbf9fbde48631de7af06d8.png";
import imgImage6 from "./f1f2dce188a1f2702f5f7215ffe26184f27356db.png";
import imgImage11 from "./4df7fafd06b5f218d5141bc2069cd6be6d69f34f.png";
import imgImage10 from "./2cef0f83c89a90dd86935309216debf93855bb44.png";
import imgImage5 from "./ec7724c9479dfc16cc2b404db1f1dcabb72f3a63.png";
import imgImage7 from "./b063f0e086ceed44504d530d9bd12a753e99a47f.png";

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p3e991200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative" data-name="icon">
      <Icon1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Icon />
        </div>
      </div>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid flex-[1_0_0] font-['Jost:Light',sans-serif] font-light leading-[normal] min-w-px relative text-[16px] text-black underline">Return to projects</p>
    </div>
  );
}

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

function Frame4() {
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame4 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#b9ccd1] relative shrink-0 w-full" data-name="header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Josefin_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#aeaeb2] text-[14px] text-center w-full">Lili Smyth | Product designer</p>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[96px] text-black w-full">Lili Smyth</p>
    </div>
  );
}

function Explore() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="explore">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="explore">
          <mask height="48" id="mask0_1_1044" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="48" id="Bounding box" width="48" />
          </mask>
          <g mask="url(#mask0_1_1044)">
            <path d={svgPaths.pdde6940} fill="var(--fill-0, #1C1B1F)" id="explore_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Explore />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">Wellington, New Zealand</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame12 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[36px] text-black w-[min-content]">Product designer</p>
      <Frame40 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] font-normal gap-[24px] items-start leading-[normal] min-w-px relative text-black">
      <p className="relative shrink-0 text-[18px] w-full">About me</p>
      <p className="relative shrink-0 text-[24px] w-full">{`I'm a UX Designer at Deloitte Digital, passionate about creating intuitive, human-centered solutions that make an impact. With a strong background in UX/UI, web development, and digital strategy, I enjoy tackling complex challenges across diverse industries. Beyond consulting, I’m also part of the teaching team at the University of Sydney, where I share my knowledge with the next generation of designers. I thrive in collaborative environments, combining technical expertise with a strategic mindset to deliver accessible, scalable, and engaging experiences.`}</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame36() {
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

function Frame37() {
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

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Call1 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">+64 28 8532 7884</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame36 />
      <Frame37 />
      <Frame41 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[64px] items-start pb-[128px] pt-[64px] px-[152px] relative size-full">
        <Frame13 />
        <Frame31 />
        <Frame5 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[270px]">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Product design consultant</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[222px]">
      <Frame16 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame18 />
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1fa2bbb0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="h-[60px] relative shrink-0 w-[130px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Frame49 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[129px]">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Academic tutor</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0">
      <Frame20 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame19 />
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1fa2bbb0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="h-[60px] relative shrink-0 w-[173px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <Frame50 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[101px]">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">UX designer</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0">
      <Frame24 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame21 />
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1fa2bbb0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="h-[60px] relative shrink-0 w-[87px]" data-name="image 11">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.63%] left-0 max-w-none top-[-26.27%] w-full" src={imgImage11} />
        </div>
      </div>
      <Frame51 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[134px]">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Pisces boutique</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0">
      <Frame27 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame26 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame25 />
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1fa2bbb0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="h-[60px] relative shrink-0 w-[158px]" data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[262.5%] left-0 max-w-none top-[-79.17%] w-full" src={imgImage10} />
        </div>
      </div>
      <Frame52 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[115px]">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Web designer</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0">
      <Frame30 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame29 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame28 />
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1fa2bbb0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="relative shrink-0 size-[60px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
        </div>
      </div>
      <Frame53 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[116px]">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full">Camp teacher</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0">
      <Frame44 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame43 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame32 />
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1fa2bbb0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[362px]">
      <div className="h-[50px] relative shrink-0 w-[286px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <Frame54 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame33 />
      <Frame38 />
      <Frame34 />
      <Frame42 />
      <Frame35 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[152px] py-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">Jump to</p>
        <Frame48 />
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black w-full">Product design consultant</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame57 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">a product designer passionate about creating intuitive, engaging and accessible digital products solving real user problems through design.</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-[47px] relative shrink-0 w-[102px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">February 2023 - current | 3 years +</p>
      <Frame56 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Consulting</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">UX/UI Design</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Business analysis</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Leader</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame55 />
      <Frame58 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[18px] text-black w-full">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 w-full">My impact</p>
      <ul className="block font-['Jost:Light',sans-serif] font-light leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Lead and contribute to UX projects across various industries, ensuring solutions are user-centric, accessible, and technically feasible.</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Independently manage work streams, plan project timelines, and facilitate meaningful stakeholder workshops.</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Design interfaces and experiences for platforms such as Salesforce, Sitecore, ServiceNow, and PowerBI, aligning with government and enterprise design systems.</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Leverage web development knowledge to create solutions that enhance feasibility, speed up delivery, and optimise implementation.</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[normal]">{`Mentor junior designers, provide constructive feedback, and support the team's continuous growth.`}</span>
        </li>
      </ul>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative">
      <Frame47 />
      <Frame59 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[48px] relative size-full">
        <Frame46 />
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black w-full">UX Designer</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame65 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">xx</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-[113px] relative shrink-0 w-[164px]" data-name="image 11">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.63%] left-0 max-w-none top-[-26.27%] w-full" src={imgImage11} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">January 2023 - current | 3 years</p>
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">UX/UI Design</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Print design</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Branding</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame63 />
      <Frame66 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[18px] text-black w-full">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 w-full">My impact</p>
      <ul className="block font-['Jost:Light',sans-serif] font-light leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Design physical and digital branding materials, including the company logo, posters, and vehicle wraps.</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Provide UX and design guidance for the StoreStuff website to enhance usability and visual appeal.</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[normal]">Build screens in Wordpress using elementor and custom css.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative">
      <Frame62 />
      <Frame67 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[48px] relative size-full">
        <Frame61 />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black w-full">Academic tutor</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame73 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">Web design and development tutor within the Design Computing Teaching Team</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-[87px] relative shrink-0 w-[251px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">August 2022 - August 2025 | 4 years</p>
      <Frame72 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Teaching</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Mentoring</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Marking</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame71 />
      <Frame74 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[18px] text-black w-full">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 w-full">My impact</p>
      <ul className="block font-['Jost:Light',sans-serif] font-light leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Teach tutorials in Web Design and Development and Advanced Web Design for the Design Computing degree</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[normal]">Assess design proposals, low-fidelity wireframes, and website prototypes, guiding students through UX best practices</span>
        </li>
      </ul>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative">
      <Frame70 />
      <Frame75 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[48px] relative size-full">
        <Frame69 />
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black w-full">Web designer</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame81 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">xx</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-[60px] relative shrink-0 w-[158px]" data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[262.5%] left-0 max-w-none top-[-79.17%] w-full" src={imgImage10} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">November 2018 - February 2023 | 5 years</p>
      <Frame80 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Web design</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Print design</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Branding</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame79 />
      <Frame82 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[18px] text-black w-full">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 w-full">My impact</p>
      <ul className="block font-['Jost:Light',sans-serif] font-light leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Designed and managed the e-commerce store, increasing brand visibility and engagement.</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[normal]">Developed digital and print marketing materials to drive customer acquisition and retention.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative">
      <Frame78 />
      <Frame83 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[48px] relative size-full">
        <Frame77 />
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black w-full">Web designer</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame89 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">a product designer passionate about creating intuitive, engaging and accessible digital products solving real user problems through design.</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[105px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">December 2021 - September 2022 | 10 months</p>
      <Frame88 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Web design</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">UX/UI Design</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Print design</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame87 />
      <Frame90 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[18px] text-black w-full">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 w-full">My impact</p>
      <ul className="block font-['Jost:Light',sans-serif] font-light leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Led the end-to-end design of a new website and mobile application, ensuring a seamless and engaging user experience.</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[normal]">Designed social media and print materials to support brand awareness and user engagement.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative">
      <Frame86 />
      <Frame91 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[48px] relative size-full">
        <Frame85 />
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black w-full">Camp teacher</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame97 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">Instructed classes of primary school children in STEM classes.</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-[31px] relative shrink-0 w-[177px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">March 2021 - February 2023 | 2 years</p>
      <Frame96 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Teaching</p>
      </div>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Pill">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Mentoring</p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame95 />
      <Frame98 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[18px] text-black w-full">
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 w-full">My impact</p>
      <ul className="block font-['Jost:Light',sans-serif] font-light leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[27px]">
          <span className="leading-[normal]">Instructed classes of 12-30 primary school-age children in a variety of subjects including programming, stop motion animation, video production, brand design, web design, graphic design, and audio production.</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[normal]">xx</span>
        </li>
      </ul>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative">
      <Frame94 />
      <Frame99 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex items-start p-[48px] relative size-full">
        <Frame93 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[48px] items-start p-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black w-full">My experience</p>
        <Frame45 />
        <Frame60 />
        <Frame68 />
        <Frame76 />
        <Frame84 />
        <Frame92 />
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-black text-center w-full">Work with me</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <Frame102 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black text-center w-full">Open to xyz</p>
    </div>
  );
}

function Frame103() {
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

function Mail2() {
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

function Frame104() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Mail2 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">lili.paris@icloud.com</p>
    </div>
  );
}

function Call2() {
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

function Frame105() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Call2 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">+64 28 8532 7884</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame103 />
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame101 />
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#b9ccd1] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[152px] py-[96px] relative size-full">
          <Frame100 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] font-normal gap-[48px] items-start leading-[normal] relative shrink-0 text-[24px] text-black w-full whitespace-nowrap">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">CV</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">My work</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline">xx</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[152px] py-[48px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function FullScreenDesign() {
  return (
    <div className="bg-[#fdfff0] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Full screen design">
      <Header />
      <Frame7 />
      <Frame9 />
      <Frame8 />
      <Frame10 />
      <Frame3 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <FullScreenDesign />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame106 />
    </div>
  );
}

export default function Cv() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="CV">
      <Frame107 />
    </div>
  );
}