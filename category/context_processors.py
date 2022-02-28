from .models import Category, SubCategory

def menu_links(request):
    links = Category.objects.all()
    cats = []
    if links:
        for li in links:
            item = {}
            item['parentid'] = li.id
            item['parentname'] = li.category_name
            item['url'] = li.get_url()
            sublink = SubCategory.objects.filter(category_id=li.id)
            if sublink:
                subCats = []
                for sub in sublink:
                    itemSub = {}
                    itemSub['subid'] = sub.id
                    itemSub['subname'] = sub.subcategory_name
                    subCats.append(itemSub)
                item['sub'] = subCats
            cats.append(item)
        
    return dict(cats = cats)
