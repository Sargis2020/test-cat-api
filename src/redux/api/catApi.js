import  axios  from "axios"

const getUrl = (url) => process.env.REACT_APP_BASE_URL + url

export const getCategories = async () => {
    try {
        return await axios.get(getUrl('categories'));
    } catch (error) {
        console.error(error.message);
    }
};



export const getCategoriesImage = async (data) => {
    try {
        return await axios.get(getUrl(`images/search?limit=${data.limit}&page=${data.page}&category_ids=${data.categoryId}`));
    } catch (error) {
        console.error(error.message);
    }
};