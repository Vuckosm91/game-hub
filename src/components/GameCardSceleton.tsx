import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSceleton = () => {
  return (
    <Card borderRadius={10} width={"300px"} overflow={"hidden"}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSceleton;
