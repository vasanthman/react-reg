import './App.css';
import { useState } from 'react';

function FirstPage() {

  const[Next,setNext]=useState(false);
  const handleClick=()=>{
      setNext(true)
  }

  return (
<>
    <div class="flex flex-col rounded-[10px] border-solid	border-[#e6e6e6] border-[1px] p-[32px] gap-[32px] items-center justify-start relative">
  <div class="flex flex-col	gap-[96px] items-start justify-start shrink-0 relative">
    <div class="flex flex-col gap-[24px] items-start justify-start shrink-0 w-[513px] relative overflow-hidden">
      <div class="flex flex-row items-center justify-between shrink-0 w-[513px] relative">
        <div class=" font-normal text-[#182021] text-left text-[20px] leading-[28px]	relative">Create a job</div>
        <div class="step-1">Step 1</div>
      </div>
      <div class="flex flex-col gap-[8px] items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-col gap-[4px] items-start justify-start self-stretch shrink-0 relative">
          <div class="flex flex-row gap-[8px] w-[214px] items-center justify-start self-stretch shrink-0 relative">
            <div class="label text-left relative">
              <span><span className="label-span">Job title</span>
                <span class="text-[#d86161]">*</span></span>
            </div>
          </div>
          <div class="flex border-[1px] border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row gap-[0px] items-center justify-start flex-[1px] relative">
              <input type='text' class="placeholder:text-[#7a7a7a]-400" placeholder="ex. UX UI Designer" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-[8px] items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-col gap-[4px] items-start justify-start self-stretch shrink-0 relative">
          <div class="flex flex-row gap-[8px] w-[214px] items-center justify-start self-stretch shrink-0 relative">
            <div class="label text-left relative">
              <span><span class="label-span">Company name</span>
              <span class="text-[#d86161]">*</span></span>
            </div>
          </div>
          <div class="flex border-[1px] border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row gap-[0px] items-center justify-start flex-[1px] relative">
              <input type='text' class="placeholder:text-[#7a7a7a]-400" placeholder="ex. Google" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-[8px] items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-col gap-[4px] items-start justify-start self-stretch shrink-0 relative">
          <div class="flex flex-row gap-[8px] w-[214px] text-500 items-center justify-start self-stretch shrink-0 relative">
            <div class="label text-left relative">
              <span>
                <span class="label-span">Industry</span>
                
                <span class="text-[#d86161]">*</span></span>
              
            </div>
          </div>
          <div class="flex border-[1px] border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row gap-[0px] items-center justify-start flex-[1px] relative">
              <input type='text' class="placeholder:text-[#7a7a7a]-400" placeholder="ex. Information Technology" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-[24px] items-end justify-start self-stretch shrink-0 relative">
        <div class="flex flex-col gap-[8px] items-start justify-start self-stretch flex-1 relative">
          <div class="flex flex-col gap-[4px] items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row gap-[8px] items-center w-[214px] justify-start self-stretch shrink-0 relative">
              <div class="label-span text-left	relative text-500">Location</div>
            </div>
            <div class="flex border-[1px] border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center justify-start self-stretch shrink-0 relative">
              <div class="flex flex-row gap-[0px] items-center justify-start flex-[1px] relative">
                <input type='text' class="placeholder:text-[#7a7a7a]-400" placeholder="ex. Chennai" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[8px] items-start justify-start self-stretch flex-1 relative">
          <div class="flex flex-col gap-[4px] items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row gap-[8px] items-center w-[214px] justify-start self-stretch shrink-0 relative">
              <div class="label-span text-left	relative text-500">Remote type</div>
            </div>
            <div class="flex border-[1px] border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center justify-start self-stretch shrink-0 relative">
              <div class="flex flex-row gap-[0px] items-center justify-start flex-[1px] relative">
              <input type='text' class="placeholder:text-[#7a7a7a]-400" placeholder="ex. In-office" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-[0px] items-center justify-end shrink-0 w-[513px] relative">
      <div class="flex flex-row g-[24px] items-start justify-start shrink-0 relative">
        <div class="flex bg-[#1597e4] rounded-[6px] border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center justify-start self-stretch shrink-0 relative">
          <div class="text-[#ffffff] text-left text-500 text-[16px] leading-[150%] font-sans" >Next</div>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
  );
}

export default FirstPage;
