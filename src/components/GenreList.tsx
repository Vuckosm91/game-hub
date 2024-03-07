import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <List key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"large"}>{genre.name}</Text>
          </HStack>
        </List>
      ))}
    </ul>
  );
};

export default GenreList;
