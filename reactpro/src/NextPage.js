import logo from './logo.svg';
import './App.css';

function NextPage() {
  return (
    <div class="flex flex-col h-[564px] rounded-[10px] border-solid	border-[#e6e6e6] border-[1px] p-[32px] gap-[96px] items-center justify-start relative">
    <div class="flex flex-col	gap-[24px] items-start justify-start shrink-0 relative">
      <div class="flex w-[513px] flex-row	gap-[8px] items-start justify-start shrink-0 relative">
        <div class=" font-normal font-sans text-400 text-[#182021] text-left text-[20px] leading-[28px]	relative">Create a job</div>
        <div class="text-right text-[#182021] flex-1">Step 2</div>
      </div>
      <div class="flex flex-col w-[513px]	gap-[24px] items-start justify-start shrink-0 relative truncate">
        <div class="flex flex-row gap-[24px] items-end self-stretch justify-start shrink-0 relative">
          <div class="flex flex-col gap-[8px] items-start  justify-start flex-1  relative">
            <div class="flex flex-col 	gap-[4px] items-start justify-start self-stretch shrink-0 relative">
              <div class="flex flex-col w-[214px]	gap-[8px] items-start  justify-start shrink-0 relative">
                <div class="text-left font-sans text-[#212121] relative">Experience</div>
              </div>
              <div class="flex rounded-[5px] border border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-start justify-start self-stretch shrink-0 relative">
                <div class="flex flex-row gap-[0px] items-center justify-start flex-1 relative">
                  <input class="text-left  placeholder:text-[#7a7a7a] placeholder:font-sans relative" placeholder='Minimum'/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col 	gap-[8px] items-start  justify-start flex-1 shrink-0 relative">
            <div class="flex flex-col 	gap-[4px] items-start self-stretch justify-start flex-1 shrink-0 relative">
              <div class="flex flex-col 	gap-[8px] w-[214px] items-center  justify-start flex-1 shrink-0 relative"></div>
              <div class="flex rounded-[5px] border border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center justify-start self-stretch shrink-0 relative">
                <div class="flex flex-row gap-[0px] items-center justify-start flex-1 relative">
                  <input class="text-left  placeholder:text-[#7a7a7a] placeholder:font-sans relative" placeholder='Maximum'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row 	gap-[24px] items-end  justify-start self-stretch shrink-0 relative">
          <div class="flex flex-col gap-[8px] items-start justify-start flex-1 relative ">
            <div class="flex flex-col gap-[4px] items-start justify-start shrink-0 self-stretch relative">
              <div class="flex flex-row gap-[8px] items-center justify-start shrink-0 w-[214px] relative">
                <div class="text-left text-[#212121] font-sans relative">Salary</div>
              </div>
              <div class="flex rounded-[5px] border border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center justify-start self-stretch shrink-0 relative">
                <div class="flex flex-row gap-[0px] items-center justify-start flex-1 relative">
                  <input class="text-left  placeholder:text-[#7a7a7a] placeholder:font-sans relative" placeholder='Minimum'/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[8px] items-start justify-start flex-1 relative">
            <div class="flex flex-col gap-[4px] items-start justify-start self-stretch shrink-0 relative">
              <div class="flex flex-row gap-[8px] items-center justify-start w-[214px] shrink-0 relative"></div>
              <div class="flex rounded-[5px] border border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center justify-start self-stretch shrink-0 relative">
                <div class="flex flex-row gap-[0px] items-center justify-start flex-1 relative ">
                <input class="text-left  placeholder:text-[#7a7a7a] placeholder:font-sans relative" placeholder='Maximum'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[8px] items-start justify-start self-stretch shrink-0 relative">
          <div class="flex flex-col gap-[4px] items-start justify-start self-stretch  shrink-0 relative">
            <div class="flex flex-row gap-[8px] items-center w-[214px] justify-start self-stretch  shrink-0 relative">
              <div class="text-left text-[#212121] text-500 font-sans relative">Total employee</div>
            </div>
            <div class="flex rounded-[5px] border border-[#e6e6e6]  flex-row gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-start justify-start self-stretch shrink-0 relative">
              <div class="flex flex-row gap-[0px] items-center justify-start flex-1 relative">
              <input class="text-left  placeholder:text-[#7a7a7a] placeholder:font-sans relative" placeholder='ex. 100'/>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-[24px] items-start justify-start self-stretch shrink-0 relative">
          <div class="flex flex-col gap-[4px] items-start justify-start flex-1 relative">
            <div class="    display:flex flex-row gap-[4px] items-center justify-start shrink-0 relative">
              <div class="text-left text-[#212121] text-500 font-sans relative">Apply type</div>
            </div>
            <div class="pt-[8px] pr-[0px] pb-[8px] pl-[0px] flex flex-row gap-[20px] items-center justify-start shrink-0 height-[36px] relative">
              <div class="flex flex-row gap-[16px] items-center justify-center shrink-0 relative">
                <div class="flex flex-row gap-[4px] items-center justify-start shrink-0 relative">
                  <div class="shrink-0 w-[20px]  h-[20px] relative">
                    <div class="rounded-[50%] border border-[#d8d8d8] border-2 absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top -[0%] h-[100%]"></div>
                  </div>
                  <div class="text-[#7a7a7a] text-left relative flex items-center justify-start font-sans">Quick apply</div>
                </div>
                <div class="flex flex-row gap-[4px] items-center justify-start shrink-0 relative">
                  <div class="shrink-0 w-[20px]  h-[20px] relative">
                    <div class="rounded-[50%] border border-[#d8d8d8] border-2 absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top -[0%] h-[100%]"></div>
                  </div>
                  <div class="text-[#7a7a7a] text-left relative flex items-center justify-start font-sans">External apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-[0px] items-center justify-end self-stretch shrink-0 relative">
      <div class="flex flex-row gap-[24px] justify-start items-start shrink-0 relative">
        <div class="flex rounded-[6px] border bg-[#1597e4]  flex-row gap-[0px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-center justify-center shrink-0 relative truncate">
          <div class="text-[#ffffff] text-left font-sans text-500 relative">Save</div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default NextPage;
