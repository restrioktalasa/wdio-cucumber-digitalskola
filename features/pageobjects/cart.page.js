import Page from "./page";
import { $, expect } from '@wdio/globals';

class CartPage extends Page {
    get cartIcon() {
        return $('//*[@id="shopping_cart_container"]/a');
    }

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get cartBadge() {
        return $('#shopping_cart_container > a > span');
        
    }

    get removeButton() {
        return $('#remove-sauce-labs-backpack')
    }

    get shoppingCart(){
        return $('#shopping_cart_container')
    }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async validateItemAdded() {
        await expect(this.cartBadge).toHaveText('1');
    }

    async removeItemFromCart(){
        await this.removeButton.click();
    }

    async validateCartisEmpty(){
        await expect(this.shoppingCart).toHaveText('')
    }

    open() {
        return super.open("cart.html");
    }
}

export default new CartPage();
