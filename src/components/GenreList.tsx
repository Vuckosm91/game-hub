import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={5}>
        Genres
      </Heading>
      {genres.map((genre) => (
        <List key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              objectFit={"cover"}
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant={"link"}
              fontSize={"large"}
              whiteSpace={"normal"}
              textAlign={"start"}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </List>
      ))}
    </>
  );
};

export default GenreList;
