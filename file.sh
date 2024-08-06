    echo -n "Enter the file extension (e.g., txt): "
    read extension

    for file in *."$extension"; do
      original_filename=$(basename "$file")
      filename_without_extension="${original_filename%.*}"

      new_filename=$(echo "$filename_without_extension" | sed -E 's/[&%[:space:]+[:punct:]\x27]/_/g')

      # Check if the new filename is different from the original filename
      if [ "$original_filename" != "${new_filename// /_}.$extension" ]; then
        mv "$file" "${new_filename// /_}.$extension"
        echo "export { default as ${new_filename} } from './${new_filename// /_}.$extension';" >> index.js
      else
      echo "export { default as ${filename_without_extension} } from './${filename_without_extension}.$extension';" >> index.js
      fi
    done
    echo "completed"
