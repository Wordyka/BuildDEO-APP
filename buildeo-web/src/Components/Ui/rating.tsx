import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const DynamicRating = ({ defaultValue = 2.5, precision = 0.5, readOnly = false, }) => {
  return (
    <Stack spacing={1}>
      <Rating 
        name="dynamic-rating" 
        defaultValue={defaultValue} 
        precision={precision} 
        readOnly={readOnly} 
      />
    </Stack>
  );
};

export default DynamicRating;
