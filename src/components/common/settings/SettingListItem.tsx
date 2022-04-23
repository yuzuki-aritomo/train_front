import Image from "next/image";
import styled from "styled-components"
import ArrowRight from '@/assets/arrow_right.svg'
import { GRAY } from "@/context/style/colorTheme";

type SettingListItemProps = {
  settingName: string,
  hasBorderBottom: boolean,
}

export const SettingListItem: React.FC<SettingListItemProps> = (props) => {
  return (
    <SettingListItemWrapper hasBorderBottom={props.hasBorderBottom}>
      <SettingListItemName>{props.settingName}</SettingListItemName>
      <Image alt="arrow_right" src={ArrowRight}/>
    </SettingListItemWrapper>
  )
}

const SettingListItemWrapper = styled.div<{hasBorderBottom: boolean}>`
  width: 92%;
  padding:16px 0;
  border-bottom: ${(props) => 
    props.hasBorderBottom ? `1px solid ${GRAY}`: `none`};
  margin: ${(props) => 
    props.hasBorderBottom ? `0 auto 10px auto`: `0 auto`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SettingListItemName = styled.p`
  font-size: 16px;
  text-align: left;
  flex-basis: 80%;
`;
 