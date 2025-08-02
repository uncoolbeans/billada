export function getImagePaths(subdir) {

    let imageModules;

    switch (subdir) {
        case "collaroy": imageModules = import.meta.glob('../assets/collaroy/*.{jpg,jpeg,png,gif,svg,webp}', { eager: true, import: 'default'}); break;
        default : imageModules = import.meta.glob('../../src/assets/*.{jpg,jpeg,png,gif,svg,webp}', { eager: true, import: 'default'});
    }

    return Object.values(imageModules);
}