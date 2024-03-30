import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={5}>
        Genres
      </Heading>
      {data?.results.map((genre) => (
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
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
