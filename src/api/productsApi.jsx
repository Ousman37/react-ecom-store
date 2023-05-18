const baseUrl = 'https://api.noroff.dev/api/v1/online-shop';

export const getProducts = async () => {
  try {
    const response = await fetch(`${baseUrl}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async productId => {
  try {
    const response = await fetch(`${baseUrl}/products/${productId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProductToCart = async productId => {
  try {
    const response = await fetch(`${baseUrl}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCartItems = async () => {
  try {
    const response = await fetch(`${baseUrl}/cart`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeCartItem = async cartItemId => {
  try {
    const response = await fetch(`${baseUrl}/cart/${cartItemId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
