import AvatarBody from "./AvatarBody";
import AvatarClothes from "./AvatarClothes";
import AvatarGlasses from "./AvatarGlasses";
import AvatarHair from "./AvatarHair";
import { AvatarContainer } from "./styles";
import { AvatarProvider } from "../../context/avatar";

/** Interactive self avatar reminiscent of Filipino politicians in posters. @component */
export default function Avatar() {
  return (
    <AvatarProvider>
      <AvatarContainer>
        <AvatarBody />
        <AvatarClothes />
        <AvatarHair />
        <AvatarGlasses />
      </AvatarContainer>
    </AvatarProvider>
  );
}
