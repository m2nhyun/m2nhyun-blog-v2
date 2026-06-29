export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const colors = {
  ink: "text-[#1d1d1f]",
  muted: "text-[#6e6e73]",
  soft: "text-[#86868b]",
  blue: "text-[#0066cc]",
  blueHover: "hover:text-[#0071e3]",
  paper: "bg-[#f5f5f7]",
  panel: "bg-white",
  hairline: "border-[#e8e8ed]",
  line: "border-[#d2d2d7]",
  danger: "text-[#b42318]",
};

export const ui = {
  app: {
    body: cn("min-h-full flex flex-col bg-[#f5f5f7] text-[#1d1d1f] font-sans text-[17px] leading-[1.55]", "max-md:text-base"),
    main: "flex-1",
  },

  layout: {
    shell: "mx-auto w-full max-w-[1040px] px-5",
    shellNarrow: "mx-auto w-full max-w-[720px] px-5",
    pageStack: "grid gap-[72px] pt-[54px] max-md:gap-[52px] max-md:pt-10",
  },

  nav: {
    header: "sticky top-0 z-20 border-b border-[#d2d2d7]/70 bg-[#f5f5f7]/85 backdrop-blur-xl",
    inner: "mx-auto flex h-[52px] w-full max-w-[1040px] items-center justify-between px-5",
    brand: "font-mono text-[0.95rem] font-semibold leading-none",
    brandDot: colors.blue,
    links: "flex gap-[22px] text-[0.82rem] text-[#6e6e73] max-md:gap-4",
    link: "transition-colors hover:text-[#1d1d1f]",
  },

  footer: {
    root: "mt-24 border-t border-[#e8e8ed] bg-white text-[#6e6e73]",
    inner: "mx-auto flex w-full max-w-[1040px] justify-between gap-5 px-5 py-7 text-[0.82rem] max-md:flex-col",
    text: "m-0",
  },

  text: {
    eyebrow: "m-0 font-mono text-[0.72rem] font-semibold uppercase leading-tight text-[#86868b]",
    link: "font-medium text-[#0066cc] hover:text-[#0071e3] hover:underline hover:underline-offset-3",
    sectionTitle: "mt-1.5 mb-0 font-semibold text-[1.65rem] leading-tight",
  },

  button: {
    base: "inline-flex min-h-10 items-center justify-center rounded-full border border-[#d2d2d7] bg-white px-[18px] text-[0.95rem] text-[#0066cc] transition-colors hover:border-[#0071e3] hover:text-[#0071e3] disabled:cursor-not-allowed disabled:opacity-55",
    primary: "border-[#0066cc] bg-[#0066cc] text-white hover:bg-[#0071e3] hover:text-white",
  },

  hero: {
    root: "py-14 pb-7 max-md:py-8 max-md:pb-3",
    title: "mt-[18px] mb-5 max-w-[760px] text-[3.25rem] font-semibold leading-[1.08] max-md:text-[2.28rem]",
    accent: colors.blue,
    copy: "m-0 max-w-[620px] text-[1.08rem] leading-[1.68] text-[#6e6e73] max-md:text-base",
    actions: "mt-7 flex flex-wrap gap-2.5",
  },

  section: {
    heading: "mb-5 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start max-md:gap-3",
  },

  pageHeader: {
    root: "max-w-[680px] pt-[22px]",
    title: "mt-3 mb-3.5 text-[2.7rem] font-semibold leading-[1.1] max-md:text-[2.25rem]",
    copy: "m-0 text-[1.05rem] leading-[1.65] text-[#6e6e73]",
  },

  postList: {
    root: "overflow-hidden rounded-[18px] border border-[#e8e8ed] bg-white",
    card: "grid grid-cols-[150px_1fr_auto] items-start gap-6 border-b border-[#e8e8ed] p-6 last:border-b-0 max-md:grid-cols-1 max-md:gap-3.5 max-md:p-5",
    meta: "grid gap-[7px] font-mono text-[0.74rem] font-medium leading-snug text-[#86868b]",
    title: "mb-2 mt-0 text-[1.28rem] font-semibold leading-[1.32]",
    titleLink: "hover:text-[#0066cc]",
    summary: "m-0 leading-[1.62] text-[#6e6e73]",
    readLink: "max-md:hidden",
  },

  empty: "rounded-[18px] border border-[#e8e8ed] bg-white px-6 py-12 text-center text-[#6e6e73]",

  article: {
    root: "mx-auto w-full max-w-[720px] px-5 pt-[72px] max-md:pt-12",
    header: "border-b border-[#d2d2d7] pb-[34px]",
    title: "my-4 text-[2.55rem] font-semibold leading-[1.16] max-md:text-[2rem]",
    summary: "m-0 text-[1.08rem] leading-[1.68] text-[#6e6e73]",
    time: "mt-[22px] block font-mono text-[0.76rem] font-medium leading-snug text-[#86868b]",
  },

  prose: {
    root: "pt-[38px] text-base leading-[1.78]",
    h2: "mt-[2.4em] mb-[0.7em] text-[1.55rem] font-semibold leading-tight",
    h3: "mt-[2em] mb-[0.55em] text-[1.22rem] font-semibold leading-snug",
    p: "my-[1.15em]",
    list: "my-[1.15em] pl-6",
    listItem: "my-1",
    link: "text-[#0066cc] underline underline-offset-3 hover:text-[#0071e3]",
    inlineCode: "rounded-md bg-[#eeeeF2] px-[0.38em] py-[0.14em] font-mono text-[0.92em]",
    pre: "my-[1.8em] overflow-auto rounded-lg p-5 text-[0.88rem]",
    blockquote: "my-[1.8em] border-l-[3px] border-[#0066cc] pl-[18px] text-[#6e6e73]",
  },

  project: {
    grid: "grid grid-cols-2 gap-4 max-md:grid-cols-1",
    card: "rounded-[18px] border border-[#e8e8ed] bg-white p-6",
    title: "mt-3 mb-2 text-[1.45rem] font-semibold leading-tight",
    summary: "m-0 leading-[1.62] text-[#6e6e73]",
    details: "mt-[22px] grid grid-cols-[46px_1fr] gap-x-3.5 gap-y-[9px] text-[0.9rem]",
    detailTerm: "font-semibold",
    detailDescription: "m-0 leading-[1.55] text-[#6e6e73]",
    links: "mt-7 flex flex-wrap gap-2.5",
    link: "flex items-center gap-1.5 text-[0.88rem] font-medium text-[#0066cc] hover:text-[#0071e3]",
  },

  about: {
    copy: "grid gap-4 text-base leading-[1.72]",
    heading: "mt-6 mb-0 text-[1.42rem] font-semibold leading-tight",
    paragraph: colors.muted,
  },

  form: {
    card: "mx-auto mt-[88px] w-full max-w-[420px] rounded-[18px] border border-[#e8e8ed] bg-white p-[30px]",
    cardTitle: "mt-2.5 mb-6 text-[1.7rem] font-semibold leading-tight",
    stack: "grid gap-[18px]",
    wide: "max-w-[800px]",
    label: "grid gap-2 text-[0.88rem] font-medium text-[#6e6e73]",
    control: "w-full rounded-lg border border-[#d2d2d7] bg-white px-[13px] py-3 text-[#1d1d1f] outline-none focus:outline-2 focus:outline-offset-1 focus:outline-[#0066cc]",
    checkbox: "flex items-center gap-2 text-[0.88rem] font-medium text-[#6e6e73]",
    checkboxInput: "w-auto",
    editor: "font-mono leading-relaxed",
    error: "m-0 text-[0.9rem] text-[#b42318]",
  },

  admin: {
    shell: "mx-auto grid w-full max-w-[1040px] grid-cols-[160px_1fr] gap-11 px-5 pt-[54px] max-md:grid-cols-1",
    side: "flex flex-col items-start gap-3.5 text-[#6e6e73] max-md:flex-row max-md:flex-wrap",
    content: "space-y-0",
    title: "mt-2 mb-[26px] text-[2rem] font-semibold leading-tight",
    list: "overflow-hidden rounded-[18px] border border-[#e8e8ed] bg-white",
    row: "flex justify-between gap-5 border-b border-[#e8e8ed] px-5 py-[18px] last:border-b-0",
    rowMeta: "mt-1 mb-0 text-[0.82rem] text-[#6e6e73]",
  },
};
