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
        <SettingListItem name="駅を変更" route="/settings/change-stations" />
        <SettingListItem isLastChild name="パスワードを変更" route="/" />
      </SettingListItemsWrapper>
      <SettingListItemsWrapper>
        <SettingListItem name="利用規約" route="/" />
        <SettingListItem name="プライバシーポリシー" route="/" />
        <SettingListItem isLastChild name="お問い合わせ" route="/" />
      </SettingListItemsWrapper>
      <SettingListItemsWrapper>
        <SettingListItem isLastChild name="ログアウト" route="/" />
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
