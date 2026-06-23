import AvatarBody from "./AvatarBody";
import AvatarClothes from "./AvatarClothes";
import AvatarGlasses from "./AvatarGlasses";
import AvatarHair from "./AvatarHair";
import { AvatarContainer } from "./styles";

/** Interactive self avatar reminiscent of Filipino politicians in posters. @component */
export default function Avatar() {
  return (
    <AvatarContainer>
      <AvatarBody />
      <AvatarClothes />
      <AvatarHair />
      <AvatarGlasses />
    </AvatarContainer>
  );
}
