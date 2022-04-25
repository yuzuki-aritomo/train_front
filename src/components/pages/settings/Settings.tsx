import styled from 'styled-components';
import { IconMenu } from '@/components/common/IconMenu';
import { SettingHeader } from '@/components/common/settings/SettingHeader';
import { SettingListItem } from '@/components/common/settings/SettingListItem';
import { GRAY, WHITE } from '@/context/style/colorTheme';

export const Settings = () => {
  return (
    <SettingContainer>
      <SettingHeader pageName="設定" />
      <SettingListItemsWrapper>
        <SettingListItem settingName="駅を変更" settingRoute="/settings/change-stations" />
        <SettingListItem isLastChild settingName="パスワードを変更" settingRoute="/" />
      </SettingListItemsWrapper>
      <SettingListItemsWrapper>
        <SettingListItem settingName="利用規約" settingRoute="/" />
        <SettingListItem settingName="プライバシーポリシー" settingRoute="/" />
        <SettingListItem isLastChild settingName="お問い合わせ" settingRoute="/" />
      </SettingListItemsWrapper>
      <SettingListItemsWrapper>
        <SettingListItem isLastChild settingName="ログアウト" settingRoute="/" />
      </SettingListItemsWrapper>
      <IconMenu isHomePage={false} />
    </SettingContainer>
  );
};

const SettingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${GRAY};
`;

const SettingListItemsWrapper = styled.div`
  width: 100%;
  font-weight: 700;
  background-color: ${WHITE};
  padding: 10px 0;
  margin: 0 0 20px 0;
`;
