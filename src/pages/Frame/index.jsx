import React from "react";

import { Button, Img, List, Text } from "components";

const FramePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-spacegrotesk items-center justify-start mx-auto pb-[21px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[3500px] md:px-5 relative w-full">
            <div className="h-[90px] mx-auto w-full">
              <Img
                className="h-[90px] m-auto object-cover w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="absolute flex flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-[95%]">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_image_40x40.png"
                  alt="image_One"
                />
                <div className="bg-yellow-400 h-[46px] rounded-lg w-[15%]"></div>
              </div>
            </div>
            <div className="absolute h-[3500px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[3500px] m-auto object-cover w-full"
                src="images/img_image_3500x1200.png"
                alt="image_Two"
              />
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[1%] w-[98%]">
                <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtSpaceGroteskRegular22"
                    >
                      BNB
                    </Text>
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-yellow-400"
                      size="txtSpaceGroteskRegular21"
                    >
                      DOGE
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[180px] sm:mt-0 mt-1 text-base text-yellow-400"
                      size="txtSpaceGroteskRegular16"
                    >
                      Home
                    </Text>
                    <Text
                      className="ml-16 sm:ml-[0] sm:mt-0 mt-1 text-base text-blue_gray-200"
                      size="txtSpaceGroteskRegular16Bluegray200"
                    >
                      LP
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[60px] sm:mt-0 mt-1 text-base text-blue_gray-200"
                      size="txtSpaceGroteskRegular16Bluegray200"
                    >
                      Earn
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[62px] sm:mt-0 mt-[5px] text-base text-blue_gray-200"
                      size="txtSpaceGroteskRegular16Bluegray200"
                    >
                      Lucky Drop
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[62px] sm:mt-0 mt-1 text-base text-blue_gray-200"
                      size="txtSpaceGroteskRegular16Bluegray200"
                    >
                      DAO
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[203px] sm:mt-0 mt-1 text-base text-black-900"
                      size="txtSpaceGroteskRegular16Black900"
                    >
                      Connect Wallet
                    </Text>
                  </div>
                  <Text
                    className="mt-[197px] text-[19px] text-center text-yellow-400"
                    size="txtSpaceGroteskRegular19"
                  >
                    Proudly Launch on Binance Chain
                  </Text>
                  <Text
                    className="capitalize mt-[29px] sm:text-[39px] md:text-[45px] text-[49px] text-center text-white-A700"
                    size="txtSpaceGroteskRegular49"
                  >
                    Co-built by AI creatures and our community
                  </Text>
                  <div className="bg-black-900_7f border-2 border-solid border-yellow-400 flex flex-col items-center justify-start mt-[236px] p-12 md:px-10 sm:px-5 rounded-[15px] w-[66%] md:w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start mb-[3px] w-[99%] md:w-full">
                      <Text
                        className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
                        size="txtSpaceGroteskRegular36"
                      >
                        You can claim BDOGE now!
                      </Text>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="h-12 md:ml-[0] ml-[3px] relative w-[96%] sm:w-full">
                          <Text
                            className="leading-[24.00px] m-auto text-[15px] text-blue_gray-200 text-center w-full"
                            size="txtSpaceGroteskRegular15"
                          >
                            A total of 210,000,000,000,000,000 BDOGE tokens are
                            now available to be claimed by the holders of
                          </Text>
                          <div className="absolute bottom-[0] flex flex-col justify-start right-[4%]">
                            <Text
                              className="text-[15px] text-blue_gray-200 text-center"
                              size="txtSpaceGroteskRegular15"
                            >
                              $PEPE, $AIDOGE or BAB Token
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[117px] text-[15px] text-blue_gray-200 text-center"
                              size="txtSpaceGroteskRegular15"
                            >
                              (Binance Account Bound Token).
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="leading-[24.00px] ml-2.5 md:ml-[0] mt-[39px] text-[15px] text-blue_gray-200 text-center w-[97%] sm:w-full"
                          size="txtSpaceGroteskRegular15"
                        >
                          BDOGE tokens that have not been claimed within 31 days
                          will be used for the Community Long-Term Incentive
                          Reward Program. The BDOGE will be distributed to the
                          top contributors of Binance Chain community and
                          burned.
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[61px] mt-[53px] w-[74%] md:w-full">
                          <Img
                            className="h-5 md:h-auto object-cover w-5"
                            src="images/img_image_20x20.png"
                            alt="image_Three"
                          />
                          <Text
                            className="text-[15px] text-white-A700"
                            size="txtSpaceGroteskRegular15WhiteA700"
                          >
                            2023.05.09 3:00:00(UTC+0) - 2023.06.09
                            3:00:00(UTC+0)
                          </Text>
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between mt-[41px] w-[99%] md:w-full">
                          <Text
                            className="text-[15px] text-blue_gray-200 text-center"
                            size="txtSpaceGroteskRegular15"
                          >
                            Received
                          </Text>
                          <Text
                            className="text-[15px] text-blue_gray-200 text-center"
                            size="txtSpaceGroteskRegular15"
                          >
                            210,000,000,000,000,000
                          </Text>
                        </div>
                        <div className="bg-white-A700_19 h-2.5 mt-[11px] rounded-[5px] w-full"></div>
                        <Text
                          className="bg-white-A700_19 h-[50px] justify-center mt-5 pl-[25px] pr-[35px] sm:px-5 py-[13px] rounded-lg text-blue_gray-200 text-lg w-[596px]"
                          size="txtSpaceGroteskRegular18"
                        >
                          0
                        </Text>
                        <Button className="bg-gray-900 cursor-pointer min-w-[596px] md:min-w-full mt-[30px] py-3 rounded-lg text-base text-center text-white-A700_7f">
                          Ended
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-40 w-full">
                  <div className="border border-solid border-white-A700_19 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[10px] w-[36%] md:w-full">
                    <Img
                      className="h-[526px] md:h-auto object-cover rounded-[10px] w-full"
                      src="images/img_image_526x378.png"
                      alt="image_Four"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[56%] md:w-full">
                    <Text
                      className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                      size="txtSpaceGroteskRegular36"
                    >
                      What is BDOGE?
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-yellow-400"
                      size="txtSpaceGroteskRegular15Yellow400"
                    >
                      Contract: 0x7B3b1d7d4375e78e061B3A6782828C71d6A4D5D4
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[25px] text-[15px] text-blue_gray-200 w-full"
                      size="txtSpaceGroteskRegular15"
                    >
                      BDOGE is a deflationary token. It will be used by BDOGE
                      ecosystem applications. The total supply is
                      210,000,000,000,000,000 tokens. BDOGE belongs to everyone
                      in the Binance Chain community and is also a necessary key
                      to unlock the future chapters of the BDOGE story.
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[15px] text-[15px] text-blue_gray-200 w-full"
                      size="txtSpaceGroteskRegular15"
                    >
                      BDOGE has a 15% burning tax, so adjusting your slippage
                      tolerance to around 20% is suggested when buying/selling
                      to ensure your successful transactions. Every time you buy
                      BDOGE, you will receive a Lucky Drop ticket with a chance
                      to win an USDT prize based on the purchase amount. You can
                      also stake your BDOGE to earn more.
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-center ml-28 md:ml-[0] mt-[33px] w-[66%] md:w-full">
                      <Button className="bg-yellow-400 cursor-pointer min-w-[200px] py-3 rounded-lg text-base text-black-900 text-center">
                        Buy BDOGE
                      </Button>
                      <div className="border border-solid border-yellow-400 flex flex-row gap-[13px] items-center justify-center p-3 rounded-lg w-[47%] sm:w-full">
                        <Text
                          className="ml-8 text-base text-yellow-400"
                          size="txtSpaceGroteskRegular16"
                        >
                          View Docs
                        </Text>
                        <Img
                          className="h-5 md:h-auto mr-[31px] object-cover w-5"
                          src="images/img_image_1.png"
                          alt="image_Five"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="capitalize mt-[156px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
                  size="txtSpaceGroteskRegular36"
                >
                  Token Allocation & Funds Distribution
                </Text>
                <Img
                  className="h-[373px] sm:h-auto mt-[70px] object-cover w-[95%] md:w-full"
                  src="images/img_image_373x1100.png"
                  alt="image_Six"
                />
              </div>
              <div className="absolute bottom-[13%] h-[300px] md:h-[424px] inset-x-[0] mx-auto w-full">
                <Img
                  className="h-[300px] m-auto object-cover w-full"
                  src="images/img_image_300x1200.png"
                  alt="image_Seven"
                />
                <div className="absolute bg-gray-900_d8 flex flex-col gap-2.5 h-max inset-y-[0] items-center justify-center left-[0] my-auto p-[19px] rounded-lg">
                  <Text
                    className="mt-2 sm:text-3xl md:text-[32px] text-[34px] text-center text-yellow-400"
                    size="txtSpaceGroteskRegular34"
                  >
                    210,000T
                  </Text>
                  <Text
                    className="mb-2.5 text-center text-sm text-white-A700"
                    size="txtSpaceGroteskRegular14"
                  >
                    BDOGE Total Supply
                  </Text>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-center justify-center m-auto w-[67%]">
                  <div className="bg-gray-900_d8 flex flex-col gap-2.5 items-center justify-center p-[25px] sm:px-5 rounded-lg">
                    <Text
                      className="mt-0.5 sm:text-3xl md:text-[32px] text-[34px] text-center text-yellow-400"
                      size="txtSpaceGroteskRegular34"
                    >
                      127,641T
                    </Text>
                    <Text
                      className="mb-[5px] text-[13px] text-center text-white-A700"
                      size="txtSpaceGroteskRegular13"
                    >
                      BDOGE Current Supply
                    </Text>
                  </div>
                  <div className="bg-gray-900_d8 flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[9px] p-[27px] sm:px-5 rounded-lg">
                    <Text
                      className="sm:text-[29px] md:text-[31px] text-[33px] text-center text-yellow-400"
                      size="txtSpaceGroteskRegular33"
                    >
                      82,358T
                    </Text>
                    <Text
                      className="mb-[3px] text-center text-sm text-white-A700"
                      size="txtSpaceGroteskRegular14"
                    >
                      BDOGE Total Burn
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[9px] grid grid-cols-2 ml-2.5 md:ml-[0] w-1/2 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-gray-900_d8 flex flex-col gap-2.5 items-center justify-center p-5 rounded-lg w-full">
                      <Text
                        className="mt-[7px] sm:text-3xl md:text-[32px] text-[34px] text-center text-yellow-400"
                        size="txtSpaceGroteskRegular34"
                      >
                        219,858T
                      </Text>
                      <Text
                        className="mb-[9px] text-center text-sm text-white-A700"
                        size="txtSpaceGroteskRegular14"
                      >
                        BDOGE Trading Volume
                      </Text>
                    </div>
                    <div className="bg-gray-900_d8 flex flex-col gap-[9px] items-center justify-center p-[7px] rounded-lg w-full">
                      <Text
                        className="mt-5 sm:text-3xl md:text-[32px] text-[34px] text-center text-yellow-400"
                        size="txtSpaceGroteskRegular34"
                      >
                        11,932.947
                      </Text>
                      <Text
                        className="mb-[23px] text-center text-sm text-white-A700"
                        size="txtSpaceGroteskRegular14"
                      >
                        Lucky Drop Reward $USDT
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="absolute bg-gray-900_d8 flex flex-col gap-[9px] h-max inset-y-[0] items-center justify-center my-auto p-[3px] right-[0] rounded-lg">
                  <Text
                    className="mt-6 sm:text-3xl md:text-[32px] text-[34px] text-center text-yellow-400"
                    size="txtSpaceGroteskRegular34"
                  >
                    11,932.947
                  </Text>
                  <Text
                    className="mb-[27px] text-center text-sm text-white-A700"
                    size="txtSpaceGroteskRegular14"
                  >
                    BDOGE Accumulated $USDT
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[2%] flex md:flex-col flex-row gap-[29px] inset-x-[0] items-center justify-between mx-auto w-[98%]">
                <div className="h-[310px] relative w-[19%] md:w-full">
                  <Img
                    className="h-[310px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_image_310x211.png"
                    alt="image_Eight"
                  />
                  <div className="absolute bg-black-900_7f bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2.5 w-full">
                    <Text
                      className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                      size="txtSpaceGroteskRegular22"
                    >
                      BDOGE
                    </Text>
                    <Text
                      className="mt-1 text-center text-white-A700 text-xs"
                      size="txtSpaceGroteskRegular12"
                    >
                      Get started
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-4/5 md:w-full"
                  orientation="horizontal"
                >
                  <div className="h-[310px] sm:ml-[0] relative w-full">
                    <Img
                      className="h-[310px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_image_2.png"
                      alt="image"
                    />
                    <div className="absolute bg-black-900 bottom-[0] flex flex-col gap-[5px] inset-x-[0] items-center justify-start mx-auto p-2.5 w-full">
                      <Text
                        className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                        size="txtSpaceGroteskRegular22"
                      >
                        BCODE
                      </Text>
                      <Text
                        className="text-center text-white-A700 text-xs"
                        size="txtSpaceGroteskRegular12"
                      >
                        Coming soon...
                      </Text>
                    </div>
                    <Img
                      className="absolute h-10 inset-[0] justify-center m-auto object-cover w-10"
                      src="images/img_image_3.png"
                      alt="image_One"
                    />
                  </div>
                  <div className="h-[310px] sm:ml-[0] relative w-full">
                    <Img
                      className="h-[310px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_image_4.png"
                      alt="image"
                    />
                    <div className="absolute bg-black-900 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[11px] w-full">
                      <Text
                        className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                        size="txtSpaceGroteskRegular22"
                      >
                        NFT Prologue
                      </Text>
                      <Text
                        className="mt-0.5 text-center text-white-A700 text-xs"
                        size="txtSpaceGroteskRegular12"
                      >
                        Coming soon...
                      </Text>
                    </div>
                    <Img
                      className="absolute h-10 inset-[0] justify-center m-auto object-cover w-10"
                      src="images/img_image_3.png"
                      alt="image_One"
                    />
                  </div>
                  <div className="h-[310px] sm:ml-[0] relative w-full">
                    <Img
                      className="h-[310px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_image_5.png"
                      alt="image"
                    />
                    <div className="absolute bg-black-900 bottom-[0] flex flex-col gap-[5px] inset-x-[0] items-center justify-start mx-auto p-2.5 w-full">
                      <Text
                        className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                        size="txtSpaceGroteskRegular22"
                      >
                        BDOGE Vault
                      </Text>
                      <Text
                        className="text-center text-white-A700 text-xs"
                        size="txtSpaceGroteskRegular12"
                      >
                        Coming soon...
                      </Text>
                    </div>
                    <Img
                      className="absolute h-10 inset-[0] justify-center m-auto object-cover w-10"
                      src="images/img_image_3.png"
                      alt="image_One"
                    />
                  </div>
                  <div className="h-[310px] sm:ml-[0] relative w-full">
                    <Img
                      className="h-[310px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_image_6.png"
                      alt="image"
                    />
                    <div className="absolute bg-black-900 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2.5 w-full">
                      <Text
                        className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                        size="txtSpaceGroteskRegular22"
                      >
                        AI Lab
                      </Text>
                      <Text
                        className="mt-1 text-center text-white-A700 text-xs"
                        size="txtSpaceGroteskRegular12"
                      >
                        Coming soon...
                      </Text>
                    </div>
                    <Img
                      className="absolute h-10 inset-[0] justify-center m-auto object-cover w-10"
                      src="images/img_image_3.png"
                      alt="image_One"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center justify-center mt-[30px] md:px-5 w-[16%] md:w-full">
            <div className="bg-white-A700_33 h-[50px] rounded-[50%] w-[50px]"></div>
            <div className="bg-white-A700_33 h-[50px] rounded-[50%] w-[50px]"></div>
            <div className="bg-white-A700_33 h-[50px] rounded-[50%] w-[50px]"></div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[936px] mt-[43px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between w-full">
              <Img
                className="h-10 md:h-auto md:mt-0 mt-6 object-cover w-10"
                src="images/img_image_40x40.png"
                alt="image_Nine"
              />
              <Text
                className="md:mt-0 mt-[29px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtSpaceGroteskRegular22"
              >
                BNB
              </Text>
              <div className="flex flex-col justify-start">
                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[440px] w-[44%] md:w-full">
                  <Text
                    className="text-[19px] text-white-A700"
                    size="txtSpaceGroteskRegular19WhiteA700"
                  >
                    Resources
                  </Text>
                  <Text
                    className="ml-[61px] text-white-A700 text-xl"
                    size="txtSpaceGroteskRegular20"
                  >
                    Products
                  </Text>
                  <Text
                    className="ml-[69px] text-[19px] text-white-A700"
                    size="txtSpaceGroteskRegular19WhiteA700"
                  >
                    Press
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-1 w-full">
                  <Text
                    className="mb-3 sm:text-[17px] md:text-[19px] text-[21px] text-yellow-400"
                    size="txtSpaceGroteskRegular21"
                  >
                    DOGE
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[385px] sm:mt-0 mt-[21px] text-blue_gray-200 text-sm"
                    size="txtSpaceGroteskRegular14Bluegray200"
                  >
                    Whitepaper
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[79px] sm:mt-0 mt-[21px] text-[13px] text-blue_gray-200"
                    size="txtSpaceGroteskRegular13Bluegray200"
                  >
                    Lucky Drop
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[87px] sm:mt-0 mt-5 text-blue_gray-200 text-sm"
                    size="txtSpaceGroteskRegular14Bluegray200"
                  >
                    Terms of Use
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-2.5 w-full">
              <Text
                className="sm:mt-0 mt-[7px] text-blue_gray-200 text-sm"
                size="txtSpaceGroteskRegular14Bluegray200"
              >
                BNBDoge.AI, an Experiment in the BNB Chain Ecosystem.
              </Text>
              <a
                href="javascript:"
                className="sm:ml-[0] ml-[154px] text-[13px] text-blue_gray-200"
              >
                <Text size="txtSpaceGroteskRegular13Bluegray200">FAQs</Text>
              </a>
              <Text
                className="sm:ml-[0] ml-[127px] text-[13px] text-blue_gray-200"
                size="txtSpaceGroteskRegular13Bluegray200"
              >
                Earn
              </Text>
              <a
                href="javascript:"
                className="sm:ml-[0] ml-[130px] text-[13px] text-blue_gray-200"
              >
                <Text size="txtSpaceGroteskRegular13Bluegray200">
                  Privacy Policy
                </Text>
              </a>
            </div>
            <Text
              className="md:ml-[0] ml-[850px] mt-1 text-[13px] text-blue_gray-200"
              size="txtSpaceGroteskRegular13Bluegray200"
            >
              Brand
            </Text>
            <div className="flex flex-row items-center justify-center md:ml-[0] ml-[314px] mt-[61px] w-[37%] md:w-full">
              <Text
                className="text-[15px] text-blue_gray-200 text-center"
                size="txtSpaceGroteskRegular15"
              >
                Copyright © 2023
              </Text>
              <Text
                className="ml-[3px] text-center text-sm text-yellow-400"
                size="txtSpaceGroteskRegular14Yellow400"
              >
                BNBDoge.AI
              </Text>
              <Text
                className="ml-[5px] text-blue_gray-200 text-center text-sm"
                size="txtSpaceGroteskRegular14Bluegray200"
              >
                . All right reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FramePage;
