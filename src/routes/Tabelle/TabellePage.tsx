import { Container } from '@/UI/Elements/Container';
import { Text } from '@/UI/Elements/Text';
import { DataList } from '@/features/data-grid/components';

function TabellePage() {
  return (
    <Container>
      <Text
        size="7"
        as="p"
      >
        DataGrid
      </Text>
      <div className="">
        <DataList />
      </div>
    </Container>
  );
}

export default TabellePage;
