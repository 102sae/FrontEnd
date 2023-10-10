import DialogBox from "../componets/DialogBox";
import palette from "../styles/color";
function Intro() {
  return (
    <div className="root">
      <DialogBox
        dialog={
          "밤하늘의 북쪽에서 가장 밝게 빛나는 별, \n북극성에 우주여행작가 쏠이 살고 있었어요.\n 그날도 어느 때와 같이 글을 써 내려가고 있었습니다.\n 다녀왔던 별들은 전부 아름다웠지만,"
        }
        name="??"
        backgroundColor={palette.main_dialog}
        arrowColor={palette.sol_text}
      />
    </div>
  );
}

export default Intro;
