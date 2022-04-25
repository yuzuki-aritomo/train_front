import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import styled from 'styled-components';
import ArrowRight from '@/assets/arrow_right.svg';
import { GRAY } from '@/context/style/colorTheme';

type SettingListItemProps = {
  settingName: string;
  settingRoute: string;
  isLastChild?: boolean;
};

export const SettingListItem: React.FC<SettingListItemProps> = ({
  settingName,
  settingRoute,
  isLastChild = false,
}) => {
  const router: NextRouter = useRouter();
  return (
    <SettingListItemWrapper
      isLastChild={isLastChild}
      onClick={() => router.push(settingRoute)}
    >
      <SettingListItemName>{settingName}</SettingListItemName>
      <Image alt="arrow_right" src={ArrowRight} />
    </SettingListItemWrapper>
  );
};

const SettingListItemWrapper = styled.div<{ isLastChild: boolean }>`
  width: 92%;
  padding: 16px 0;
  border-bottom: ${(props) =>
    props.isLastChild ? `none` : `1px solid ${GRAY}`};
  margin: ${(props) => (props.isLastChild ? `0 auto` : `0 auto 10px auto`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SettingListItemName = styled.p`
  font-size: 16px;
  text-align: left;
  flex-basis: 80%;
`;
