import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import styled from 'styled-components';
import { MENU } from '../../../constants/menus';

const AdminBoardsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 0px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`;

const TableHead = styled.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${colors.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .board_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BoardListRow = styled.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .board-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.8rem;
  }
  &:hover {
    background-color: ${colors.gray[0]};
    transition: 0.3s;
  }
`;

const AdminBoard = ({ boards }) => {
  return (
    <AdminBoardsBlock>
      <TitleContainer>게시판 관리</TitleContainer>
      <ButtonContainer>
        <ActionButton to={`/${MENU.ADMIN}/boards/new`}>
          게시판 생성
        </ActionButton>
      </ButtonContainer>
      <ContentsContainer>
        <Table>
          <thead>
            <TableHead>
              <th className="board_list_head">이름</th>
              <th className="board_list_head">URL</th>
              <th className="board_list_head">읽기 권한</th>
              <th className="board_list_head">쓰기 권한</th>
              <th className="board_list_head">동작</th>
            </TableHead>
          </thead>
          <tbody>
            {boards.map((board) => (
              <BoardListRow key={board.id}>
                <td className="board-list-row">{board.name}</td>
                <td className="board-list-row">{board.urlPath}</td>
                <td className="board-list-row">{board.readPermission}</td>
                <td className="board-list-row">{board.writePermission}</td>
                <td className="board-list-row">
                  <ActionButton>편집</ActionButton>
                  <ActionButton>삭제</ActionButton>
                </td>
              </BoardListRow>
            ))}
          </tbody>
        </Table>
      </ContentsContainer>
    </AdminBoardsBlock>
  );
};

export default AdminBoard;
