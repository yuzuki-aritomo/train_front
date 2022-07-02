import styled from 'styled-components';
import { IconMenu } from '@/components/common/IconMenu';
import { SettingHeader } from '@/components/common/settings/SettingHeader';
import { SettingListItem } from '@/components/common/settings/SettingListItem';
import { WHITE } from '@/context/style/colorTheme';

export const Settings = () => {
  return (
    <>
      <SettingContainer>
        <SettingHeader pageName="設定" />
        <SettingListItemsWrapper>
          <SettingListItem isLastChild name="駅を変更" route="/settings/change-stations" />
        </SettingListItemsWrapper>
        {/* 以下リリース時のみ
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
        </SettingListItemsWrapper> */}
      </SettingContainer>
      <IconMenu isHomePage={false} />
    </>
  );
};

const SettingContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  background-color: rgba(23, 25, 30, 0.06);
`;

const SettingListItemsWrapper = styled.div`
  font-weight: 700;
  background-color: ${WHITE};
  padding: 10px 0;
  margin: 0 0 20px 0;
`;
