# Original method, using an image with the desired palette to map the colours to
# convert <source> -ordered-dither o4x4 -remap palette.png <output>

# New method where an image is created on the fly to act as the palette, and passed into conversion command.
# Taken from this StackOverflow answer; https://stackoverflow.com/a/25265526
echo "Converting $1..."

input=$1
file="${input%.*}"
extension="${input##*.}"
output="${file}_dithered.${extension}"
size="325x325"

if [ $extension = "gif" ];
then
  convert -size 1x1 \
    xc:"#FFCDB1" \
    xc:"#FFB4A2" \
    xc:"#E5989B" \
    xc:"#B5838D" \
    xc:"#6D6875" \
    -append txt:- |\
  convert $input -strip -coalesce -resize $size\> -ordered-dither o4x4 -remap txt:- -layers optimize $output
elif [ $extension = 'jpg' ] || [ $extension = 'jpeg' ]
then
  output="${file}_dithered.png"
  convert -size 1x1 \
    xc:"#FFCDB1" \
    xc:"#FFB4A2" \
    xc:"#E5989B" \
    xc:"#B5838D" \
    xc:"#6D6875" \
    -append txt:- |\
  convert $input -resize $size\> -ordered-dither o4x4 -remap txt:- $output
else
  convert -size 1x1 \
    xc:"#FFCDB1" \
    xc:"#FFB4A2" \
    xc:"#E5989B" \
    xc:"#B5838D" \
    xc:"#6D6875" \
    -append txt:- |\
  convert $input -resize $size\> -ordered-dither o4x4 -remap txt:- $output
fi

echo "Written to $output!"
