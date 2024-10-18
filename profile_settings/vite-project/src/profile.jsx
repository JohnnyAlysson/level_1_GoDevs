import React from "react"


export const ProfileSetting = () => {
return(
  <div className="w-[375px] h-[584px] px-6 pt-6 pb-4 bg-[#fcfcfd] rounded-xl shadow border border-[#f4effa] flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <img className="w-12 h-12 rounded-lg" src="https://picsum.photos/200/300" />
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-[#37333d] text-lg font-bold font-['Heebo'] leading-normal">Marvin McKinney</div>
            <div className="text-[#675f71] text-sm font-normal font-['Heebo'] leading-[18px]">marvin.mckinney@example.com</div>
        </div>
    </div>
    <div className="self-stretch h-[472px] flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-[0px] border border-[#f4effa]"></div>
        <div className="self-stretch h-24 flex-col justify-start items-start gap-3 flex">
            <div className="text-[#797084] text-xs font-normal font-['Heebo'] uppercase leading-3 tracking-wide">conta</div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
                <div className="self-stretch py-2 justify-start items-center gap-2 inline-flex hover:bg-sky-300 rounded-md transition-all">
                    <div className="w-5 h-5 relative " />
                    <a className="grow shrink basis-0 text-[#37333d] text-base font-normal font-['Heebo'] leading-tight cursor-pointer  ">Dados pessoais</a>
                    <div className="w-4 h-4 relative" />
                </div>
                <div className="self-stretch py-2 justify-start items-center gap-2 inline-flex  hover:bg-sky-300 rounded-md transition-all">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-[#37333d] text-base font-normal font-['Heebo'] leading-tight cursor-pointer">Informações de login</div>
                    <div className="w-4 h-4 relative" />
                </div>
            </div>
        </div>
        <div className="self-stretch h-[0px] border border-[#f4effa]"></div>
        <div className="self-stretch h-24 flex-col justify-start items-start gap-3 flex ">
            <div className="text-[#797084] text-xs font-normal font-['Heebo'] uppercase leading-3 tracking-wide">Preferências</div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
                <div className="self-stretch py-2 justify-start items-center gap-2 inline-flex  hover:bg-sky-300 rounded-md transition-all">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-[#37333d] text-base font-normal font-['Heebo'] leading-tight cursor-pointer">Notificações</div>
                    <div className="w-4 h-4 relative" />
                </div>
                <div className="self-stretch py-2 justify-start items-center gap-2 inline-flex  hover:bg-sky-300 rounded-md transition-all">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-[#37333d] text-base font-normal font-['Heebo'] leading-tight cursor-pointer">Acessibilidade</div>
                    <div className="w-4 h-4 relative" />
                </div>
            </div>
        </div>
        <div className="self-stretch h-[0px] border border-[#f4effa]"></div>
        <div className="self-stretch h-24 flex-col justify-start items-start gap-3 flex ">
            <div className="text-[#797084] text-xs font-normal font-['Heebo'] uppercase leading-3 tracking-wide">privacidade</div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
                <div className="self-stretch py-2 justify-start items-center gap-2 inline-flex  hover:bg-sky-300 rounded-md transition-all">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-[#37333d] text-base font-normal font-['Heebo'] leading-tight cursor-pointer">Aparelhos conectados</div>
                    <div className="w-4 h-4 relative" />
                </div>
                <div className="self-stretch py-2 justify-start items-center gap-2 inline-flex  hover:bg-sky-300 rounded-md transition-all">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-[#37333d] text-base font-normal font-['Heebo'] leading-tight cursor-pointer">Contas vinculadas</div>
                    <div className="w-4 h-4 relative" />
                </div>
            </div>
        </div>
        <div className="self-stretch h-[0px] border border-[#f4effa]"></div>
        <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
            <div className="self-stretch py-2 justify-start items-center gap-2 inline-flex  hover:bg-sky-300 rounded-md transition-all">
                <div className="w-5 h-5 relative" />
                <div className="grow shrink basis-0 text-[#37333d] text-base font-normal font-['Heebo'] leading-tight cursor-pointer">Central de Ajuda</div>
            </div>
            <div className="self-stretch py-2 justify-start items-center gap-2 inline-flex  hover:bg-red-300 rounded-md transition-all">
                <div className="w-5 h-5 relative" />
                <div className="grow shrink basis-0 text-[#aa2222] text-base font-normal font-['Heebo'] leading-tight cursor-pointer">Sair</div>
            </div>
        </div>
    </div>
</div>
)
}

