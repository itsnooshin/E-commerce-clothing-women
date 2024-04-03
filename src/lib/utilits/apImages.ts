import supabase from "./supabase";

export async function getImages() {
  const { data, error } = await supabase.from("product").select("*");

  if (error) {
    console.error("Nothing data");
  }
  return data;
}
