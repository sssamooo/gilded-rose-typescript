import { Shop, Item } from '../gilded_rose';

// describe("Gilded Rose", () => {

//     it("should foo", () => {
//         const gildedRose = new Shop([new Item("foo", 0, 0)]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].name).toEqual("fixme");
//     });

    // it("the quality should never be more than 50 ", () => {
    //     const input = new Shop([new Item("Aged Brie", 2, 50)]);
    //     const result = input.updateQuality();
    //     expect(result[0].quality).toBeLessThan(51);
    // });
// });


describe ("regularItem", () => {
    it("the quality shouldnt be negative", () => {
    const item = new Shop([new Item("item1", 5, 0)]);
    const result = item.updateQuality();
    expect(result[0].quality).toBeGreaterThan(-1);});

    it("the quality should degrade twice as fast after the sell by date", () => {
    const item = new Shop([new Item("item2", 0, 10)]);
    const result = item.updateQuality();
    expect(result[0].quality).toEqual(8);
    });

    it("the quality of an item shouldnt be more than 50", () => {
    const item = new Shop([new Item("item3", 2, 51)]);
    const result = item.updateQuality();
    expect(result[0].quality).toBeLessThan(51);
    });

});
